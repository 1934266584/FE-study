<template>
<div>
  <div class="mui-checkbox-con">
    <label>
      <input class="mui-checkbox" type="checkbox">默认未选中
    </label>
  </div>
  <div class="mui-checkbox-con">
    <label>
      <input class="mui-checkbox" type="checkbox" checked>默认选中
    </label>
  </div>
  <div class="mui-checkbox-con">
    <label>
      <input class="mui-checkbox checkbox-orange" type="checkbox" checked>橘黄色 checkbox-orange
    </label>
  </div>
  <div class="mui-checkbox-con">
    <label>
      <input class="mui-checkbox checkbox-green" type="checkbox" checked>绿色 checkbox-green
    </label>
  </div>
  <div class="mui-checkbox-con">
    <label>
      <input class="mui-checkbox" type="checkbox" disabled>禁用
    </label>
  </div> 
</div>

</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@mixin checkedCon($fs:18px) {
  &:before {
    display: inline-block;
    margin-top: 1px;
    margin-left: 2px;
    font-family: iconfont;
    content: "\e667";
    color: #FFFFFF;
    font-size: $fs;
  }
}
$duration: .4s;
.mui-checkbox {
  -webkit-appearance: none;
  position: relative;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-color: #FFFFFF;
  border: solid 1px #d9d9d9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-clip: padding-box;
  display: inline-block;
  &:focus {
    outline: 0 none;
    outline-offset: -2px
  }
  &:checked {
    background-color: #18b4ed;
    border: solid 1px #FFFFFF;
    @include checkedCon();
  }
  &:disabled {
    background-color: #d9d9d9;
    border: solid 1px #d9d9d9;
    @include checkedCon();
  }
  &.checkbox-green:checked {
    background-color: #5cb85c;
  }
  &.checkbox-orange:checked {
    background-color: #f0ad4e;
  }
  &.checkbox-s {
    width: 19px;
    height: 19px;
    @include checkedCon(13px);
  }
}

.mui-checkbox-anim{
  //border等其他元素不做过渡效果，增加视觉差，更有动画效果
  transition: background-color ease $duration/2;

}
</style>
