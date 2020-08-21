<template>
  <el-scrollbar class="dropdisplay">
    <zv-drop @drop="dropHandler" class="dropdisplay-drop">
      <section class="dropdisplay-container">
        <draggable v-model="vueTree" @start="drag = true" @end="drag = false">
          <component
            @click.native.self="clickHandler(item)"
            :is="item.componentName"
            v-for="item in vueTree"
            :key="item.id"
            v-bind="changeAttributes(item.attributes)"
            :class="[item.id === currentId ? 'active-component' : '', item.id]"
          >
            <template v-if="item.children">
              <component
                @click.native.self="clickHandler(childItem)"
                :is="childItem.componentName"
                v-for="childItem in item.children"
                :key="childItem.id"
                v-bind="changeAttributes(childItem.attributes)"
                :class="[childItem.id === currentId ? 'active-component' : '', childItem.id]"
              ></component>
            </template>
            <template v-else>
              {{ slotHandler(item) }}
            </template>
          </component>
        </draggable>
      </section>
    </zv-drop>
  </el-scrollbar>
</template>

<script>
import { componentUUID } from '@/utils'
import draggable from 'vuedraggable'

export default {
  name: 'DropDisplay',
  components: { draggable },
  data() {
    return {
      currentId: '',
      drag: false,
      vueTree: []
    }
  },
  methods: {
    slotHandler(item) {
      return item.slots ? item.slots[0].key : ''
    },
    dropHandler(...arg) {
      this.currentId = ''
      if (this.$store.getters.dragLock) {
        this.$store.commit('drag/SET_LOCK_STATUS', false)
        const componentName = this.$store.getters.currentDrapComponent.componentName
        const parent = this.getParent(arg[1].target)
        console.log(parent)
        const constant = JSON.parse(JSON.stringify(this.$store.getters.currentDrapComponent))
        this.findInsertParent(this.vueTree, parent, {
          id: componentUUID(componentName),
          parent,
          ...constant
        })
      }
    },
    changeAttributes(attribute) {
      if (!attribute) return ''
      return attribute.reduce((result, currentValue) => {
        if (currentValue.content) {
          result[currentValue.key] = currentValue.content
        } else {
          if (currentValue.attributes) {
            result[currentValue.key] = this.changeAttributes(currentValue.attributes)
          } else {
            result[currentValue.key] = currentValue.defaultContent
          }
        }
        return result
      }, {})
    },
    getParent(target) {
      if (target.className) {
        return target.className
      } else {
        while (
          !target.parentNode.className.includes('El') &&
          !target.parentNode.className.includes('dropdisplay-container')
        ) {
          target = target.parentNode
        }
        return target.className
      }
    },
    findInsertParent(vueTree, parent, insertComponent) {
      if (parent === 'dropdisplay-container') {
        vueTree.push(insertComponent)
        return
      }
      let hadFindParent = false
      function findParent(findItem) {
        for (let i = 0; i < findItem.length; i++) {
          if (parent.includes(findItem[i].id)) {
            hadFindParent = true
            console.log(this)
            this.$set(findItem[i], 'children', findItem[i].children || [])
            // findItem[i].children = findItem[i].children || []
            findItem[i].children.push(insertComponent)
            break
          } else {
            if (findItem[i].children && findItem[i].children.length) {
              findParent.bind(this)(findItem[i].children)
            }
          }
        }
      }

      findParent.bind(this)(vueTree)

      console.log(findParent)

      if (!hadFindParent) {
        vueTree.push(insertComponent)
      }
    },
    clickHandler(item) {
      this.currentId = item.id
      this.$store.commit('componentEdit/SET_EDIT_COMPONENT', item)
    }
  }
}
</script>

<style lang="scss">
.dropdisplay {
  background-color: $bg-color;

  &-container {
    height: 100%;
    min-height: 600px;

    .active-component {
      border: 1px dotted palevioletred;
    }
  }
}
</style>
