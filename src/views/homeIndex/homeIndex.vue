<template>
  <div class="flex-col indexPage">
    <WebHomePage />
    <MobileHomePage />
  </div>
</template>

<script>
import WebHomePage from './webHomePage.vue'
import MobileHomePage from './mobileHomePage.vue'

export default {
  components: { WebHomePage, MobileHomePage },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .indexPage {
    background-color: #000000;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    min-height: 100vh;
  }

  @media screen and (max-width: 600px) {
    .indexPage {
      .web-container {
        display: none;
      }

      .mobile-container {
        display: flex;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .indexPage {
      .web-container {
        display: flex;
      }

      .mobile-container {
        display: none;
      }
    }
  }
</style>
