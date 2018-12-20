<template>
  <div class="test">
   <div>
      <testHead :titleCon="titleCon" @headerClick="headerClick">
      <div class="headTap">
        <div @click="tapStart(item,i)" v-for="(item,i) in tapQuery" :key="i" :class="{active:item.active}"><div class="num">{{item.data.length}}</div><div class="con ">{{i}}</div></div>
      </div>
    </testHead>
   </div>
    <div class="testContent" >
      <div v-for="(item,i) in curData" :key="i" class="itemCon">
        <div class="contentTitle">
          <img :src="item.imgUrl" />
          {{item.name}}
          </div>
        <div class="info">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import testHead from '@/components/head/Head'
export default {
  name:'TestPage',
  data(){
    return {
      titleCon:'< foodHealthTestProject',
      tapQuery:{
        '放心食用':{data:[],active:true},
        '适量食用':{data:[]},
        '建议少吃':{data:[]},
      },
      curData:[]
    }
  },
  methods:{
    headerClick(){
     this.$router.back()
    },
    tapStart(item,i){
      console.log(item)
      for(var k in this.tapQuery){
        this.$set(this.tapQuery[k],'active',false)
      }
      this.$set(this.tapQuery[i],'active',true)
      this.curData=this.tapQuery[i].data
    }
  },
  created(){
    let Query=JSON.parse(this.$route.query.testData);
    Query.map((item,i)=>{
      if(item.glycemicIndex*1<30){
        this.tapQuery['放心食用'].data.push(item)
      }else if(item.glycemicIndex*1>30&&item.glycemicIndex<50){
         this.tapQuery['适量食用'].data.push(item)
      }else{
        this.tapQuery['建议少吃'].data.push(item)
      }
    });
    this.curData=this.tapQuery['放心食用'].data
  },
  components:{
    testHead
  }
}
</script>
<style scoped>
.test{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.headTap{
  display:flex;
  width:100%;
  justify-content: space-around;
  text-align: center;
  color:#ccc;
}
.testContent{
  flex:1;
  background:#efefef;
  padding:10px;
  box-sizing: border-box;
  overflow: scroll;
}
.active{
  color:#000;
}
.itemCon{
  background:#fff;
  width:100%;
  border-radius: 10px;
  padding:10px;
  box-sizing:border-box;
  margin-top:10px;
}
img{
  height:20px;
}
</style>

