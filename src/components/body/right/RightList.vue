<template>
  <div class="rightList">
    <ul class="rightFoodList">
      <li v-for="(item,i) in rightListData" :key="i" @click="addFood(item,i)" >
      <img :src="item.imgUrl" alt="">
      <div class="name">{{item.name}}</div>
      </li>
    </ul>

  </div>
</template>
<script>
import bus from '@/bus/bus'
import BScroll from 'better-scroll'
export default {
  name:'rightList',
  props:['rightListData'],
  data(){
    return {
      dialog:[],
    }
  },
  methods:{
    addFood(item,i){
      let obj={
        index:i,
        ...item
      }
      this.dialog.push(obj);
      this.dialog.map((item,i)=>{
        if(item.name==obj.name&&i!=this.dialog.length-1){
          this.dialog.splice(i,1)
        }
      });
      bus.$emit('addFood',this.dialog)
      // this.$set(this.rightListData[2],'active',true)
      // console.log(this.rightListData[2])
    }
  },
  mounted(){
    const bscorll=new BScroll('.rightList',{
      click:true,
      probetype:2
    })
  }
}
</script>
<style>
.rightList{
  flex:1;
  padding:10px 15px 0;
  overflow: hidden;
}
.rightFoodList {
  width:100%;
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
}
.rightFoodList li{
  width:40%;
  text-align: center;
  padding:10px;
  box-sizing: border-box;
}
.rightFoodList li img{
  width:100%;
  height:50px;
  border-radius: 10px;
}
</style>


