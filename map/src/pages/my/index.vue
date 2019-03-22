<template>
  <div class="wrap">
    <header>
      <div class="avatar">
        <image src="/static/images/my.png" lazy-load="false"></image>
      </div>
      <p>176****6605</p>
    </header>
    <ul>
      <li @click="goSignList">
        <icon type="waiting" size="18px" />
        <span>
          我的面试
        </span>
        <image src="/static/images/arrow.svg"></image>
      </li>
    </ul>
    <div class="ishow" v-if="showPhoneDialog">
      <div class="alertbox">
        <p class="gettext">为了更好的体验，我们需要获取您的手机号</p>
        <button class="getphone" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
      </div>
    </div>
  </div>
</template>

<script>
import {getLocation, getAuth} from '@/utils/index.js'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      showPhoneDialog: false
    }
  },

  computed: {
    ...mapState({
      info: state=>state.info
    })
  },

  methods: {
    getPhoneNumber(e){
      console.log('e...', e);
      this.showPhoneDialog = false;
    },
    goSignList(){
    wx.navigateTo({
      url:'/pages/sign/list/main'
    })
  }
  },

  onShow() {
    console.log(this.info.phone)
    if (!this.info.phone){
      this.showPhoneDialog = true;
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  background: #F4F6F9;
  width: 100%;
  height: 350rpx;
  box-sizing: border-box;
  padding: 50rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .avatar{
    width: 100rpx;
    height: 100rpx;
    background: #fff;
    text-align: center;
    padding: 20rpx;
    border-radius: 50%;
  }
  image{
    width: 90%;
    height: 90%;
  }
}
.ishow{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0,0,0,.3);
  .alertbox {
    height: 250rpx;
    background: #fff;
    border-radius: 30rpx;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    .getphone{
      width: 250rpx;
      height: 80rpx;
      margin: 30rpx auto;
      line-height: 80rpx;
      border: 1px solid #ccc;
      border-radius: 15rpx;
    }
    .gettext{
      padding: 10rpx;
      width: 450rpx;
      text-align: center;
      font-size: 34rpx;
    }
  }
}
li{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 50rpx 40rpx 0 40rpx;
  span:nth-child(2){
    flex: 1;
    margin-left: 40rpx;
    color: #666;
    font-size: 36rpx;
  }
  image{
    width: 40rpx;
    height: 40rpx;
  }
}
</style>
