<template>
  <div class="pc-container">
    <div class="flex-col pc-homeindex">
      <!-- <video
        muted=""
        loop="loop"
        autoplay="autoplay"
        src="../../assets/mobileVedio.mp4"
        class="flex-col pc-banner"
        id="video-home"
        data-object-fit=""
      /> -->
      <div class="flex-col pc-banner" />
      <Swiper class="custom-swiper" />
    </div>
    <YuanFooter />
  </div>
</template>

<script>
import YuanFooter from '../../components/YuanFooter.vue'
import Swiper from './swiper.vue'

export default {
  components: { YuanFooter, Swiper },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.pc-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .pc-homeindex {
      .pc-banner {
        height: 35rem;
        // padding: 6.81rem 0 17.63rem;
        background-image: url('../../assets/mobilebg.gif');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center cover;
        position: relative;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          content: "";
          // background: rgba(0,0,0,.7);
        }
      }

      .custom-swiper {
        margin-top: -10rem;
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
</style>
