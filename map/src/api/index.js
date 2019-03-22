import request from '@/utils/request'

// 登陆接口
export let login = code => {
  return request.post('/user/code2session', {
    code
  })
}
//面试
export let addSign = params => {
  return request.post('/sign', params);
}

// //获取列表
export let getSignList = params =>{
  return request.get('/sign',params);
}
