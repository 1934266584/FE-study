<template>
  <el-scrollbar class="leftsider">
    <section class="px16">
      <div class="leftsider-title">
        <el-tag effect="plain">组件属性</el-tag>
      </div>
      <template v-if="$store.getters.currentEditComponent.componentName">
        <el-form
          label-position="top"
          label-width="168px"
          :model="$store.getters.currentEditComponent"
        >
          <template v-for="(item, index) in $store.getters.currentEditComponent.attributes">
            <el-form-item :key="index" :label="item.label" v-if="item.label">
              <el-input v-model.number="item.content" v-if="item.type"></el-input>
              <el-input v-model="item.content" v-else></el-input>
            </el-form-item>
            <el-form-item
              :key="index + '' + idx"
              :label="styleAttr.label"
              v-for="(styleAttr, idx) in item.attributes"
            >
              <el-input v-model.number="item.content" v-if="item.type"></el-input>
              <el-input v-model="styleAttr.content" v-else></el-input>
            </el-form-item>
          </template>

          <el-form-item
            :label="item.label"
            v-for="(item, index) in $store.getters.currentEditComponent.slots"
            :key="index"
          >
            <el-input v-model="item.key"></el-input>
          </el-form-item>
        </el-form>
      </template>
    </section>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'LeftSider'
}
</script>

<style lang="scss">
.leftsider {
  &-title {
    @include containerH44();
  }
}
</style>
