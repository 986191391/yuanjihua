<template>
  <div class="flex-col legends-page">
    <WebLegends />
  </div>
</template>

<script>
import WebLegends from './webLegends'

export default {
  components: { WebLegends },
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
