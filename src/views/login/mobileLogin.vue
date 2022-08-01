<template>
    <div class="flex-col mobile-login-page">
    <div class="bg-wrapper">
    </div>
     <input type="number"  v-model="phone" placeholder="请输入手机号">
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.mobile-login-page{
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
  .bg-wrapper{
    width: 375px;
    height:156px;
    background-image: url('../../assets/login/loginbc.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
