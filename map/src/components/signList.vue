<template>
  <div>
   <ul>
     <li v-for="(item,index) in list" :key="index"></li>
     <p>{{item.company}}</p>
     <p>{{item.address.address}}</p>
     <p>{{item.start_time}}</p>
   </ul>
  </div>
</template>

<script>
//操作时间的库
const moment = require('moment');

export default {
  props: {
    list:{
      type:Array,
      default:[]
    }
  },
  // methods:{
  //   formatAddress(address) {
  //     address = JSON.parse(address);
  //     return address.address
  //   },
  //   formatTime(start_time){
  //     return moment(start_time).format('YYYY-MM-DD HH:mm');
  //   }
  // }
}
</script>

<style>

</style>
