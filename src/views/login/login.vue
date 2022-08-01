<template>
  <div class="flex-col login-page">
    <WebLogin />
    <MobileLogin/>
  </div>
</template>

<script>
import WebLogin from './webLogin.vue'
import MobileLogin from './mobileLogin.vue'
export default {
  components: { WebLogin, MobileLogin },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @media screen and (max-width: 600px) {
    .login-page {
      .web-login-page {
        display: none;
      }

      .mobile-login-page {
        display: flex;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .login-page {
      .web-login-page {
        display: flex;
      }

      .mobile-login-page {
        display: none;
      }
    }
  }
</style>
