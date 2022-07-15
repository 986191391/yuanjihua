<template>
  <div class="flex-col page">
    <div class="flex-col section_1">
      <div class="flex-col section_2">
        <WebNav />
        <div class="flex-col items-center group_3">
          <img
            src="../../assets/logo.png"
            class="image_2"
          />
          <span class="text_4">一起建设中国制造的全球共识</span>
        </div>
      </div>
    </div>
    <div class="flex-col group_4">
      <div class="flex-row">
        <div class="flex-col equal-division-item">
          <div class="flex-col section_4">
            <div class="flex-col items-start section_5">
              <div class="flex-col items-center text-wrapper"><span class="text_5">第一章· 前序</span></div>
              <span class="text_6">
                在宇宙中的另一个巨大的恒星上，存在着一个已经繁衍进化了 ，1000万年的高等文明生物「元」，元类文明有着与人类高度相近的生活方式......
              </span>
              <div class="section_6"><!--*--></div>
            </div>
          </div>
        </div>
        <div class="flex-col equal-division-item_1">
          <div class="flex-col section_7">
            <div class="flex-col items-start section_8">
              <div class="flex-col items-center text-wrapper_1"><span class="text_7">第二章 · 起缘</span></div>
              <span class="text_8">
                三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大......
              </span>
              <div class="section_6"><!--*--></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col section_9">
        <div class="flex-col items-start section_10">
          <div class="flex-col items-center text-wrapper_2"><span class="text_9">第三章· 碰撞</span></div>
          <span class="text_10">
            元计划正式启动后，由博士领导各领域顶尖科学家团队，以及护卫军队随行。为不引起民众恐慌动乱，于夜色中秘密出发南部磁场边界，这一次打开红色电磁力场与以往不同，博士团队利用从异常行星采集的频率波段，对红磁场进行点对点式穿透果然不负众望，经过几天的尝试，连接南北半球的通道终于被打开......
          </span>
          <div class="section_6"><!--*--></div>
        </div>
      </div>
    </div>
    <WebFooter />
  </div>
</template>

<script>
import WebNav from '../../components/WebNav.vue'
import WebFooter from '../../components/WebFooter.vue'

export default {
  components: { WebNav, WebFooter },
  data () {
    return {
    }
  },
  methods: {
    // onClickText_4 () {
    //   this.$router.push({ name: 'guanyuwomen' })
    // },
    // onClickText_5 () {
    //   this.$router.push({ name: 'guihuatu' })
    // }
  }
}
</script>

<style scoped lang="scss">
  .page {
    background-color: #000000;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .section_1 {
      background-image: url('../../assets/banner.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .section_2 {
        padding-bottom: 12.5rem;
        background-color: #00000059;
        box-shadow: 0px 0.063rem 0.31rem #001a781a;
        .group_3 {
          margin-top: 9.06rem;
          .image_2 {
            width: 12.56rem;
            height: 4.38rem;
          }
          .text_4 {
            margin-top: 1.33rem;
            color: #ffffff;
            font-size: 3.13rem;
            font-family: Microsoft YaHei;
            font-weight: 700;
            line-height: 3.05rem;
            letter-spacing: 0.16rem;
          }
        }
      }
    }
    .group_4 {
      margin-top: 3.53rem;
      padding: 0 3.47rem;
      .section_9 {
        background-image: url('../../assets/session3.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .section_10 {
          padding: 2.61rem 1.66rem 2.94rem;
          background-image: linear-gradient(90deg, #290000 0%, #29000000 100%);
          .text-wrapper_2 {
            padding: 0.39rem 0 0.42rem;
            background-color: #ffffff;
            border-radius: 0.16rem;
            width: 5.16rem;
            .text_9 {
              color: #000000;
              font-size: 0.69rem;
              font-family: PingFang SC;
              font-weight: 600;
              line-height: 0.64rem;
            }
          }
          .text_10 {
            text-align: left;
            margin-top: 0.73rem;
            color: #ffffff;
            font-size: 0.63rem;
            font-family: PingFang SC;
            line-height: 1.38rem;
            width: 29.34rem;
          }
        }
      }
      .equal-division-item {
        flex: 1 1 26.53rem;
        background-color: #000d22;
        height: 14.06rem;
        .section_4 {
          background-image: url('../../assets/session1.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          height: 100%;
          .section_5 {
            padding: 2.56rem 1.68rem 2.96rem;
            background-image: linear-gradient(90deg, #000d22e6 28.6%, #000d2200 100%);
            height: 100%;
            .text-wrapper {
              padding: 0.41rem 0 0.42rem;
              background-color: #ffffff;
              border-radius: 0.16rem;
              width: 5.16rem;
              .text_5 {
                color: #000000;
                font-size: 0.69rem;
                font-family: PingFang SC;
                font-weight: 600;
                line-height: 0.64rem;
              }
            }
            .text_6 {
              text-align: left;
              margin-top: 0.73rem;
              color: #ffffff;
              font-size: 0.63rem;
              font-family: PingFang SC;
              line-height: 1.38rem;
              width: 14.38rem;
            }
          }
        }
      }
      .equal-division-item_1 {
        flex: 1 1 26.53rem;
        background-color: #072e33;
        height: 14.06rem;
        .section_7 {
          background-image: url('../../assets/session2.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          height: 100%;
          .section_8 {
            padding: 2.56rem 1.68rem;
            background-image: linear-gradient(90deg, #071333e6 28.6%, #000d2200 100%);
            height: 100%;
            .text-wrapper_1 {
              padding: 0.41rem 0 0.42rem;
              background-color: #ffffff;
              border-radius: 0.16rem;
              width: 5.38rem;
              .text_7 {
                color: #000000;
                font-size: 0.69rem;
                font-family: PingFang SC;
                font-weight: 600;
                line-height: 0.64rem;
              }
            }
            .text_8 {
              text-align: left;
              margin-top: 0.73rem;
              color: #ffffff;
              font-size: 0.63rem;
              font-family: PingFang SC;
              line-height: 1.38rem;
              width: 14.53rem;
            }
          }
        }
      }
      .section_6 {
        margin-top: 1.83rem;
        background-color: #ffffff;
        width: 1.91rem;
        height: 0.36rem;
      }
    }
    .image_3 {
      margin-top: 3.48rem;
      align-self: center;
      width: 19.19rem;
      height: 0.47rem;
    }
  }
</style>
