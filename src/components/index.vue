<template>
  <div id="app">
    <projectHead :titleCon="foodHealthTestProject"><input type="text" class="header-input" placeholder="输入您要查找的食物"> </projectHead >
    <projectBody/>
  </div>
</template>
<script>
import projectHead from '@/components/head/Head'
import projectBody from '@/components/body/Body'
export default {
  name:'indexPage',
  data(){
    return {
      foodHealthTestProject:'foodHealthTestProject'
    }
  },
  components:{
    projectHead,
    projectBody
  }
}
</script>
<style>
.dialog{
  position: absolute;
  bottom:0;
  background:#fff;
  width:100%;
  height:100px;

}

</style>


