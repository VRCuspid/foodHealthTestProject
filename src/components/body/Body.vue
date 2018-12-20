<template>
  <div class="section">
    <leftList :leftListName="leftListName" @itemclick="leftItemClick"/>
    <rightList :rightListData="curData"/>
    <Dialog :visible="show"/>
  </div>
</template>
<script>
import leftList from './left/LeftList'
import rightList from './right/RightList'
import mainFood from '@/data/MainFood.json'
import dairy from '@/data/Dairy.json'
import vegetables from '@/data/Vegetables.json'
import Dialog from './Dialog'
export default {
  name:'projectBody',
  data(){
    return {
      leftListName:['主食','奶蛋制品','蔬菜类'],
      rightListData:[mainFood,dairy,vegetables],
      listDataInd:0,
      curData:[],
      show:false
    }
  },
  created(){
    this.curData=this.rightListData[0]
  },
  methods:{
    leftItemClick(ind){
      this.listDataInd=ind;
      this.curData=this.rightListData[this.listDataInd]
    }
  },
  components:{
    leftList,
    rightList,
    Dialog
  }
}
</script>
<style >

.section{
  flex:1;
  display:flex;
}
</style>

