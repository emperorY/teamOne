<template>
  <div class="wrap">
    <header>
      <span @click="updateState({active:index})" v-for="(item,index) in types" :key="index" :class="active===index?'active':''"></span>
    </header>
    <signList :list="list"></signList>
  </div>
</template>


<script>
  import signList from '@/components/signList.vue'
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
           types:['全部','未开始','已打卡','已放弃']
      }
    },
    computed: {
      ...mapState({
        active: state => state.sign.active,
        list:state => state.sign.list
      })
    },
    methods: {
      ...mapMutations({
        updateState: 'sign/updateState'
      }),
      ...mapActions({
        getList: 'sign/getList'
      })
    },
    components: {
      signList
    },
    onShow() {

    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    height: 100%;
  }
</style>