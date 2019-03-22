import {addSign} from '@/api/index'
const state = {
  list: [],
  current: {
    company: '北京小桔科技有限公司',
    phone: '17621526605',
    address: '',
    description: ''
  }
}

const mutations = {
  updateState (state, payload) {
    state.current = {...state.current, ...payload}
  }
}
const actions = {
  async submit (state, payload) {
    return new Promise(async (resolve, reject) => {
      payload.latitude = payload.address.location.lat
      payload.longitude = payload.address.location.lng
      payload.address = JSON.stringify(payload.address)
      let result = await addSign(payload)
      resolve(result)
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
