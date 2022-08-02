<template>
  <div class=" web-login-page">
  <div class="content-left">
    <div class="bg-wrapper"></div>
  </div>

    <div class="login-content">
    <div class="logo-contnet">
     <img
      src="../../assets/login/logo.png"
      class="logo"
      />
      <span>欢迎登录</span>
    </div>
    <div class="input-phone"><input type="number" :error="errors.phone" v-model="phone" placeholder="请输入手机号"></div>
    <div class="verifycode-content">
      <input type="number"  v-model="verifycode" placeholder="请输入验证码">
      <div class="verifycode-text" @click="idateBtn">{{btnTitle}}</div>
    </div>
    <div class="login_btn">
      <button :disabled="isClick" @click="handleLogin">登录</button>
    </div>
     <label for="license">
       <input type="checkbox" id="license" v-model="isAgree">
       我已阅读并同意<span>《用户协议》</span>和<span>《隐私政策》</span>
     </label>
    </div>
  </div>

</template>

<script>
export default {
  components: {},
  data () {
    return {
      phone: '',
      verifycode: '',
      errors: {},
      btnTitle: '发送验证码',
      disabled: false,
      isAgree: false
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .web-login-page{
    background-color: #000000;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    min-height: 100vh;
    display: flex;

    .content-left{
      padding: 20px 20px;
      .bg-wrapper{
        width: 780px;
        height: 1040px;
        background-image: url('../../assets/login/pcPCBG.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }

      .login-content{
    background-color: #000000;
    display: flex;
    flex-direction: column;
    padding-left: 298px;
    justify-content: center;
    .logo-contnet{
      margin-bottom: 66px;
      img{
        width: 67px;
        height: 67px;
        vertical-align: middle;
      }
      span{
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 67px;
        color: #FFFFFF;
        vertical-align: middle;
        margin-left: 30px;
      }
    }
    .input-phone{
      font-size: 24px;
      input{
      width: 524px;
      height: 74px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      padding: 20px 20px;
      color: #FFFFFF;
      }
       input:focus {//获取焦点
        outline: 1px solid #FFFFFF;//边框不用border，用outline
      }
    }
    .verifycode-content{
      display: flex;
      margin-top: 30px;
      align-items: center;
      font-size: 24px;
      input{
        width: 364px;
        height: 74px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        padding: 20px 20px;
        color: #FFFFFF;
      }
      input:focus {
        outline: 1px solid #FFFFFF !important;//边框不用border，用outline
      }
      .verifycode-text{
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: rgba(255, 255, 255, 0.5);
        margin-left: 40px;
      }
    }
    .login_btn{
      margin-top: 94px;
      button{
      width: 525px;
      height: 78px;
      font-weight: 600;
      font-size: 28px;
      line-height: 39px;
      color: #FFFFFF;
      background: rgba(148, 152, 160, 0.7);
      border-radius: 100px;
      }
    }
    label{
       margin-top: 24px;
      font-size: 14px;
       color: #FFFFFF;
       font-style: normal;
       span{
        color: #3478F6;
       }
      input{
        margin-top: 0 !important;
        // margin-bottom: 0 !important;
       font-size: 14px;
        vertical-align:middle;
      }
    }
  }

  }
</style>
