import {getSignList} from '@/api/index'
//moment 操作时间的库
const moment = require('moment');
const state = {
   active:0,
   list :[],
   page:1,
   pageSize:10
}
const mutations ={
   updateState(state,payload){
      for(let key in payload){
          state[key] = payload[key]
      }
   }
}

const actions = {
   getList({commit,state},payload){
       return new Promise(async(resolve,reject)=>{
           let params = {};
           if(state.active){
               params.status = state.active -2;
           }
           let result = await getSignList(params);

           result.data.forEach(item=>{
               item.address = JSON.parse(item.address);
               item.start_time = JSON.parse(item.start_time);
           })

           commit('updateState',{
                   list:result.data
           })
       })
   }
}

// //处理地址
// function formatAddress(address) {
//     address = JSON.parse(address);
//     return address.address
// }

//处理时间
function formatTime(start_time){
    return moment(start_time).format('YYYY-MM-DD HH:mm');
}

export default {
    namespaced :true,
    state,
    mutations,
    actions
}