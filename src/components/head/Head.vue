<template>
  <div class="header">
    <div class="header-title" @click="headerClick">
      {{titleCon}}
    </div>
    <div class="header-input-container">
      <slot/>
    </div>
  </div>
</template>
<script >
export default {
  name:'ProjectHead',
  props:['titleCon'],
  methods:{
    headerClick(){
      this.$emit('headerClick')
    }
  }
}
</script>
<style scoped>
  .header{
    width:100%;
    padding:0 10px;
    box-sizing:border-box;
    border-bottom:1px solid #efefef;
    padding-bottom: 20px;
  }
  .header-title{
    height:44px;
    line-height: 44px;
    margin:10px 0;
  }
  .header-input-container{
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .header-input-container input{
    width:70%;
    border:0;
    outline:0;
    background:#EFEFEF;
    height: 30px;
    line-height: 30px;
    padding-left:10px;
    border-radius: 20px;
  }
</style>

