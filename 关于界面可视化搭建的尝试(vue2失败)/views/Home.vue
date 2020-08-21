<template>
  <el-container class="home">
    <el-header class="home-header">
      <el-row style="height: 100%;" type="flex" justify="space-between">
        <el-col :span="12" class="home-header__left">
          <img src="~@/assets/logo.png" />
          <span class="ml8">墨子</span>
        </el-col>
        <el-col :span="12" class="home-header__right">
          <a href="http://gitlab.zoomlion.com/qiankun/mozi" target="__blank">
            <img src="~@/assets/github.png" />
          </a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <left-sider />
      </el-aside>
      <el-main>
        <drop-display />
      </el-main>
      <el-aside width="200px">
        <right-sider />
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import LeftSider from './components/LeftSider';
import RightSider from './components/RightSider';
import DropDisplay from './components/DropDisplay';

export default {
  name: 'home',
  components: { LeftSider, RightSider, DropDisplay }
}
</script>

<style lang="scss" scoped>
.home {
  font-size: 16px;
  height: 100%;

  &-header {
    background-color: $base-color;
    width: 100%;
    height: 100%;

    &__left {
      @include flex($justifyContent: flex-start);

      color: #fff;
      font-size: 18px;
      height: 100%;

      img {
        width: 32px;
      }
    }

    &__right {
      @include flex($justifyContent: flex-end);
      
      height: 100%;

      img {
        transition: all 0.3s ease-in-out;
      }

      a:hover {
        img {
          transform: scale(1.4);
        }
      }
    }
  }
}
</style>
