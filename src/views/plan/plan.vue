<template>
  <div class="flex-col plan-page">
    <div class="flex-col plan-banner">
      <YuanNav />
      <div class="flex-col slogin">
        <div class="flex-col items-center plan-label">
          <span class="text_4">roadmap</span>
          <span class="text_5">规划蓝图</span>
        </div>
        <span class="plan-slogin">一起建设中国制造的全球共识</span>
      </div>
    </div>
    <YuanFooter />
  </div>
</template>

<script>
import YuanNav from '../../components/YuanNav.vue'
import YuanFooter from '../../components/YuanFooter.vue'

export default {
  components: { YuanNav, YuanFooter },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

.plan-page {
  background-color: #000000;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;

  .plan-banner {
    background-image: url('../../assets/plan/bannertop.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .slogin {
      padding: 15.44rem 0 25.28rem;

      .plan-label {
        padding-top: 1.09rem;
        height: 2.67rem;
        position: relative;

        .text_4 {
          color: rgba(255, 255, 255, 0.1019607843);
          font-size: 2.13rem;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 1.58rem;
          letter-spacing: 1.7rem;
          text-transform: uppercase;
        }

        .text_5 {
          color: #ffffff;
          font-size: 2.13rem;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 1.98rem;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .plan-slogin {
        margin-top: 1rem;
        align-self: center;
        color: #ffffff;
        font-size: 1.03rem;
        font-family: PingFang SC;
        line-height: 0.95rem;
        letter-spacing: 0.82rem;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .plan-page {
    .web-plan-page {
      display: none;
    }

    .pc-plan-page {
      display: flex;
    }
  }
}

@media screen and (min-width: 600px) {
  .plan-page {
    .web-plan-page {
      display: flex;
    }

    .pc-plan-page {
      display: none;
    }
  }
}
</style>
