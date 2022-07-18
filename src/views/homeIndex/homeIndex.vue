<template>
  <div class="flex-col indexPage">
    <WebHomePage />
    <PcHomePage />
  </div>
</template>

<script>
import WebHomePage from './webHomePage.vue'
import PcHomePage from './pcHomePage.vue'

export default {
  components: { WebHomePage, PcHomePage },
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
    user-select: none;

    .pc-container {
      height: 100%;
      display: flex;
      flex-direction: column;

      .pc-homeindex {

        .pc-banner {
          padding: 6.81rem 0 17.63rem;
          background-image: url('../../assets/pc/pcbg.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }

        .custom-swiper {
          margin-top: -11rem;
        }

        .image_5 {
          align-self: center;
          width: 8rem;
          height: 2.75rem;
        }

        .slogin {
          margin-top: 2rem;

          .slogin_1 {
            color: #ffffff;
            font-size: 2.13rem;
            font-family: Microsoft YaHei;
            font-weight: 700;
            line-height: 2.56rem;
            letter-spacing: 0.11rem;
          }

          .slogin_2 {
            margin-top: 0.25rem;
            color: #ffffff;
            font-size: 2.13rem;
            font-family: Microsoft YaHei;
            font-weight: 700;
            line-height: 2.56rem;
            letter-spacing: 0.11rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .indexPage {
      .web-container {
        display: none;
      }

      .pc-container {
        display: flex;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .indexPage {
      .web-container {
        display: flex;
      }

      .pc-container {
        display: none;
      }
    }
  }
</style>
