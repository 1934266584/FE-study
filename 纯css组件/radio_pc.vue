<template>
  <div>
    <label class="bui-radios-label bui-radios-anim">
      <input type="radio" name="sex"/><i class="bui-radios"></i> 男
    </label>
  </div> 
</template>

<script>
export default {
  
}
</script>
 
<style lang="scss" scoped>
label.bui-radios-label input {
  position: absolute;
  opacity: 0;
  visibility: hidden;
}

label.bui-radios-label .bui-radios {
  display: inline-block;
  position: relative;
  width: 13px;
  height: 13px;
  background: #FFFFFF;
  border: 1px solid #979797;
  border-radius: 50%;
  vertical-align: -2px;
}

label.bui-radios-label input:checked + .bui-radios:after {
  position: absolute;
  content: "";
  width: 7px;
  height: 7px;
  background-color: #fff;
  border-radius: 50%;
  top: 3px;
  left: 3px;
}

label.bui-radios-label input:checked + .bui-radios {
  background: #00B066;
  border: 1px solid #00B066;
}

label.bui-radios-label input:disabled + .bui-radios {
  background-color: #e8e8e8;
  border: solid 1px #979797;
}

label.bui-radios-label input:disabled:checked + .bui-radios:after {
  background-color: #c1c1c1;
}

label.bui-radios-label.bui-radios-anim .bui-radios {
  -webkit-transition: background-color ease-out .3s;
  transition: background-color ease-out .3s;
}
</style>
