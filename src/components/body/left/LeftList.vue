<template>
  <div class="leftList">
    <ul class="list">
      <li v-for="(item,i) in leftListName" :key="i" :class="{active:i==isActive}" @click="itemClick(i)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'leftList',
  props:['leftListName'],
  data(){
    return {
      isActive:0
    }
  },
  methods:{
    itemClick(ind){
      this.isActive=ind;
      this.$emit('itemclick',ind)
    }
  }
}
</script>
<style scoped>
.leftList{
  width:120px;
  height:100%;
  background:#EFEFEF;
  box-sizing:border-box;
}
.list li{
  height:44px;
  line-height: 44px;
  text-align: center;
}
.active{
  background:#fff;
}
</style>


