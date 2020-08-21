<template>
  <div>
    <label><input class="mui-switch" type="checkbox"> 默认未选中</label>
    <label><input class="mui-switch" type="checkbox" checked> 默认选中</label>
    <label><input class="mui-switch mui-switch-animbg" type="checkbox"> 默认未选中,简单的背景过渡效果,加mui-switch-animbg类即可</label>
    <label><input class="mui-switch mui-switch-animbg" type="checkbox" checked> 默认选中</label>
    <label><input class="mui-switch mui-switch-anim" type="checkbox"> 默认未选中，过渡效果，加 mui-switch-anim
    类即可</label>
    <label><input class="mui-switch mui-switch-anim" type="checkbox" checked> 默认选中</label>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@mixin borderRadius($radius:20px) {
  border-radius: $radius;
  border-top-left-radius: $radius;
  border-top-right-radius: $radius;
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
}

$duration: .4s;
$checkedColor: #64bd63;
.mui-switch {
  width: 52px;
  height: 31px;
  position: relative;
  border: 1px solid #dfdfdf;
  background-color: #fdfdfd;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  @include borderRadius();
  background-clip: content-box;
  display: inline-block;
  -webkit-appearance: none;
  user-select: none;
  outline: none;
  &:before {
    content: '';
    width: 29px;
    height: 29px;
    position: absolute;
    top: 0px;
    left: 0;
    @include borderRadius();
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }
  &:checked {
    border-color: $checkedColor;
    box-shadow: $checkedColor 0 0 0 16px inset;
    background-color: $checkedColor;
    &:before {
      left: 21px;
    }
  }
  &.mui-switch-animbg {
    transition: background-color ease $duration;
    &:before {
      transition: left 0.3s;
    }
    &:checked {
      box-shadow: #dfdfdf 0 0 0 0 inset;
      background-color: $checkedColor;
      transition: border-color $duration, background-color ease $duration;
      &:before {
        transition: left 0.3s;
      }
    }

  }
  &.mui-switch-anim {
    transition: border cubic-bezier(0, 0, 0, 1) $duration, box-shadow cubic-bezier(0, 0, 0, 1) $duration;
    &:before {
      transition: left 0.3s;
    }
    &:checked {
      box-shadow: $checkedColor 0 0 0 16px inset;
      background-color: $checkedColor;
      transition: border ease $duration, box-shadow ease $duration, background-color ease $duration*3;
      &:before {
        transition: left 0.3s;
      }
    }

  }
}
</style>

