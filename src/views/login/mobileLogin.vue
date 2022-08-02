<template>
    <div class="flex-col mobile-login-page">
    <div class="bg-wrapper"></div>
    <div class="login-content">
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
  computed: {
    isClick () {
      if (!this.phone || !this.verifyCode) return true
      else return false
    }
  },
  methods: {
    handleLogin () {
      console.log('1111')
      // 取消错误提醒
      this.errors = {}
      // 发送请求
      this.$axios
        .post('/api/posts/sms_back', {
          phone: this.phone,
          code: this.verifyCode
        })
        .then(res => {
          // console.log(res.data);
          // 检验成功 设置登录状态并且跳转到/
          localStorage.setItem('ele_login', res.data.user._id)
          this.$router.push('/')
        })
        .catch(err => {
          // 返回错误信息
          this.errors = {
            code: err.response
          }
        })

      // const url = 'https://qa.theone.art/Authorize?appId=wy16593385228236799&scope=user_base&redirectUri=http://yuanjihua.art'
      // window.location.href = url
    },
    idateBtn () {
      this.validatePhone()
      let time = 60
      const timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer)
          this.btnTitle = '获取验证码'
          this.disabled = false
        } else {
          // 倒计时
          this.btnTitle = time + '秒后重试'
          this.disabled = true
          time--
        }
      }, 1000)
    },

    validatePhone () {
      // 验证手机号码
      if (!this.phone) {
        // Toast('手机号码不能为空')
        return false
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        // Toast('请填写正确的手机号码')
        return false
      } else {
        this.errors = {}
        return true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-login-page{
 width: 100vw;
 height: 100%;
 display: flex;
 flex-direction: column;
 background-color: #000000;
  .bg-wrapper{
    width: 375px;
    height:156px;
    background-image: url('../../assets/login/loginbc.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .login-content{
    width: 375px;
    height: 568px;
    background-color: #000000;
    border-radius: 0px 0px 30px 30px;
    border-left-color:#FFFFFF;
    border-right-color:#fff;
    display: flex;
    flex-direction: column;
    padding: 59px 16px 258px 16px;
    .input-phone{
      input{
      width: 343px;
      height: 52px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      background-color: #000000;
      padding: 16px 12px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      }
       input:focus {//获取焦点
        outline: 1px solid #FFFFFF;//边框不用border，用outline
      }
    }
    .verifycode-content{
      display: flex;
      margin-top: 18px;
      align-items: center;
      input{
        width: 247px;
        height: 52px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
        background-color: #000000;
         padding: 16px 12px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      }
      input:focus {
        outline: 1px solid #FFFFFF !important;//边框不用border，用outline
      }
      .verifycode-text{
        margin-left: 26px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .login_btn{
      margin-top: 44px;
      button{
      width: 343px;
      height: 46px;
      background: rgba(148, 152, 160, 0.7);
      border-radius: 100px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #FFFFFF;
      }
    }
    label{
       margin-top: 24px;
       font-size: 10px;
       color: #FFFFFF;
       font-style: normal;
       span{
        color: #3478F6;
       }
      input{
        margin-top: 0 !important;
        // margin-bottom: 0 !important;
        font-size: 10px;
        vertical-align:middle;
      }
    }
  }
}
</style>
