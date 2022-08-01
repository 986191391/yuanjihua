<template>
  <div class="flex-col legends-page">
    <WebLegends />
    <MobileLegends />
  </div>
</template>

<script>
import WebLegends from './webLegends'
import MobileLegends from './mobileLegends'

export default {
  components: { WebLegends, MobileLegends },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @media screen and (max-width: 600px) {
    .legends-page {
      .web-legends-page {
        display: none;
      }

      .mobile-legends-page {
        display: flex;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .legends-page {
      .web-legends-page {
        display: flex;
      }

      .mobile-legends-page {
        display: none;
      }
    }
  }
</style>
