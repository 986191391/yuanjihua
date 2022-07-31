<template>
  <div class="aboutus-page">
    <WebAboutUs />
    <MobileAboutUs />
  </div>
</template>

<script>
import WebAboutUs from './webAboutUs'
import MobileAboutUs from './mobileAboutUs.vue'

export default {
  components: { WebAboutUs, MobileAboutUs },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

.aboutus-page {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;
}

@media screen and (max-width: 600px) {
  .aboutus-page {
    .web-about-page {
      display: none;
    }

    .mobile-about-page {
      display: flex;
      font-size: 16px;
    }
  }
}

@media screen and (min-width: 600px) {
  .aboutus-page {
    .web-about-page {
      display: flex;
    }

    .mobile-about-page {
      display: none;
    }
  }
}
</style>
