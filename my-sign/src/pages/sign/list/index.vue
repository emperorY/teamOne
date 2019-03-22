<template>
  <div class="wrap">
    <header>
      <span :class="active== index ? 'action' : ''" v-for="(item,index) in types" :key="index" @click="()=>active=index">{{item}}</span>
    </header>
  </div>
</template>


<script>
export default{
  data(){
    return{
      types:['全部','未开始','已打卡','已放弃'],
      active:0
    }
  }
}

</script>

<style lang="scss" scoped>
header{
  width:100%;
  height: 88rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 30rpx;
  padding:0 30rpx;
  box-sizing: border-box;
  color:#666;
}
span.action{
  border-bottom: 2rpx solid #197DBF;
  color:#197DBF;
}
</style>
