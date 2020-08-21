<template>
  <el-scrollbar class="rightsider">
    <section class="px16">
      <div class="rightsider-title">
        <el-tag effect="plain">组件列表</el-tag>
      </div>
      <div v-for="item in currentComponent" :key="item.componentName" style="margin-top: 10px;">
        <zv-drag @dragstart="dragHandler(item, ...arguments)">
          <component :is="componentName">
            {{ item.content || '' }}
          </component>
        </zv-drag>
      </div>
    </section>
  </el-scrollbar>
</template>

<script>
import ElementComponent from './template/element-ui'
export default {
  name: 'RightSider',
  data() {
    return {
      componentName: 'ElRow',
      currentComponent: [
        {
          componentName: 'ElRow',
          content: '行',
          attributes: [
            {
              label: '样式',
              key: 'style',
              attributes: [
                {
                  label: '高度',
                  key: 'height',
                  content: '44px'
                },
                {
                  label: '背景色',
                  key: 'backgroundColor',
                  content: 'orange'
                }
              ]
            }
          ]
        },
        {
          componentName: 'ElCol',
          content: '列',
          attributes: [
            {
              key: 'style',
              attributes: [
                {
                  label: '高度',
                  key: 'height',
                  content: '44px'
                },
                {
                  label: '背景色',
                  key: 'backgroundColor',
                  content: '#333'
                }
              ]
            },
            {
              label: '所占比例',
              key: 'span',
              type: 'number',
              content: 12,
              defaultContent: 0
            }
          ]
        },
        {
          componentName: 'ElButton',
          content: '按钮',
          attributes: [],
          slots: [
            {
              label: '名称',
              key: 'content'
            }
          ]
        }
      ]
    }
  },
  methods: {
    dragHandler(item) {
      this.$store.commit('drag/SET_DRAP_COMPONENT', item)
      this.$store.commit('drag/SET_LOCK_STATUS', true)
      this.$store.commit('componentEdit/SET_EDIT_COMPONENT', {})
    }
  }
}
</script>

<style lang="scss">
.rightsider {
  &-title {
    @include containerH44();
  }
}
</style>
