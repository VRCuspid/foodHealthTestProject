<template>
  <div class="dialog insetDialog" v-show="visible">
    <div class="title">
      <span>已选食物（{{dialogData.length}}）</span>
      <button class="test" @click="goTest">去测评</button>
    </div>
    <ul class="itemList">
      <li v-for="(item,i) in dialogData" :key="i" @click="testList(item)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import bus from '@/bus/bus'
export default {
  name:'Dialog',
  data(){
    return {
      dialogData:[],
      visible:false
    }
  },
  mounted(){
    bus.$on('addFood',(item)=>{
      this.dialogData=item;
      this.visible=true;
      console.log(item)
    });
  },
  methods:{
    testList(item){
      console.log(item)
    },
    goTest(){
      this.$router.push({path:'test',query:{testData:JSON.stringify(this.dialogData)}})
    }
  }
}
</script>
<style scoped>
.insetDialog {
  display:flex;
  flex-direction: column;
  padding:0 10px;
  box-sizing:border-box;
}
.title{
  height:34px;
  line-height:34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.test{
  border:1px solid #f00;
  color:#f00;
  outline:0;
  background:#fff;
  padding:5px 10px;
  border-radius: 5px;
}
.itemList{
  flex:1;
  overflow: scroll;
  display:flex;
  flex-wrap: wrap;
}
.itemList li{
  width:20%;
  background:#efefef;
  height:30px;
  margin:5px 10px 0 0;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>


