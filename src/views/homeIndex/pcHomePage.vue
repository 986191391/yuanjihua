<template>
  <div class="pc-container">
    <!-- <YuanNav navTitle="元计划" /> -->
    <div class="flex-col pc-homeindex">
       <video  autoplay='autoplay' loop="loop">
        <source src="https://yuanjihua111.oss-cn-hangzhou.aliyuncs.com/%E7%A7%BB%E5%8A%A8%E7%AB%AF%20%E7%AB%96%E7%89%88%E7%99%BDt.mp4" type="video/mp4">
       </video>
      <!-- <div class="flex-col pc-banner">
        <img
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c//16578082901556610546.png"
          class="image_5"
        />
        <div class="flex-col items-center slogin">
          <span class="slogin_1">一起建设</span>
          <span class="slogin_2">中国制造的全球共识</span>
        </div>
      </div> -->
      <Swiper class="custom-swiper" />
    </div>
    <YuanFooter />
  </div>
</template>

<script>
// import YuanNav from '../../components/YuanNav.vue'
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
</style>
