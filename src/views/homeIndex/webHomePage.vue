<template>
  <div class="web-container">
    <div class="flex-col banner">
      <YuanNav />
      <div class="flex-col items-center group_3">
        <img
          src="../../assets/logo.png"
          class="image_2"
        />
        <span class="text_4">一起建设中国制造的全球共识</span>
      </div>
    </div>
    <div class="flex-col story_list">
      <div class="flex-row">
        <div :class="`flex-col equal-division-item ${sectionActive === 1 && 'active'}`" @click="(e) => setSectionActive(e, 1)">
          <div class="flex-col items-center text-wrapper"><span class="text_5">第一章· 前序</span></div>
          <div :class="`cloes_active_icon ${sectionActive === 1 && 'icon_active'}`" @click="setSectionHidden">x</div>
          <span :class="`text_6 ${sectionActive === 1 && 'section_hidden'}`">
            在宇宙中的另一个巨大的恒星上，存在着一个已经繁衍进化了 ，1000万年的高等文明生物「元」，元类文明有着与人类高度相近的生活方式......
          </span>
          <div :class="`justify-between story_detail ${sectionActive === 1 && 'story_detail_active'}`">
            <div class="flex-col desc">
              <span>
                三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大，不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。
              </span>
              <span>
                非常巧合的是，这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征，出奇的相似，此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为，同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。
              </span>
              <span>
                如果数据分析得无误，这颗不明行星将会在218.5天后，与元星球相撞，博士连续3天无休止地重复推演计算
              </span>
              <span>
                但得到的结果与时间都是一样，于是，博士连夜会见了国家首脑，并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日，至此，元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索，充满着未知的风险，但他们别无选择，因为博士深刻地明白......
              </span>
              <span>未完待续 更多内容关注公众号获取</span>
            </div>
            <div class="flex-col items-center scan_code_wrapper">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580460030079475322.png"
                class="scan_image"
              />
              <span class="scan_code_title">元计划公众号</span>
            </div>
          </div>
          <div :class="`section-more-icon  ${sectionActive === 1 && 'section_hidden'}`" />
        </div>
        <div :class="`flex-col equal-division-item_1 ${sectionActive === 2 && 'active'}`" @click="(e) => setSectionActive(e, 2)">
          <div class="flex-col items-center text-wrapper_1"><span class="text_7">第二章 · 起缘</span></div>
          <div :class="`cloes_active_icon ${sectionActive === 2 && 'icon_active'}`" @click="setSectionHidden">x</div>
          <span :class="`text_8 ${sectionActive === 2 && 'section_hidden'}`">
            三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大......
          </span>
          <div :class="`justify-between story_detail ${sectionActive === 2 && 'story_detail_active'}`">
            <div class="flex-col desc">
              <span>
                三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大，不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。
              </span>
              <span>
                非常巧合的是，这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征，出奇的相似，此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为，同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。
              </span>
              <span>
                如果数据分析得无误，这颗不明行星将会在218.5天后，与元星球相撞，博士连续3天无休止地重复推演计算
              </span>
              <span>
                但得到的结果与时间都是一样，于是，博士连夜会见了国家首脑，并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日，至此，元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索，充满着未知的风险，但他们别无选择，因为博士深刻地明白......
              </span>
              <span>未完待续 更多内容关注公众号获取</span>
            </div>
            <div class="flex-col items-center scan_code_wrapper">
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580460030079475322.png"
                class="scan_image"
              />
              <span class="scan_code_title">元计划公众号</span>
            </div>
          </div>
          <div :class="`section-more-icon  ${sectionActive === 2 && 'section_hidden'}`" />
        </div>
      </div>
      <div :class="`flex-col section_9 ${sectionActive === 3 && 'active'}`" @click="(e) => setSectionActive(e, 3)">
        <div class="flex-col items-center text-wrapper_2"><span class="text_9">第三章· 碰撞</span></div>
        <div :class="`cloes_active_icon ${sectionActive === 3 && 'icon_active'}`" @click="setSectionHidden">x</div>
        <span :class="`text_10  ${sectionActive === 3 && 'section_hidden'}`">
          元计划正式启动后，由博士领导各领域顶尖科学家团队，以及护卫军队随行。为不引起民众恐慌动乱，于夜色中秘密出发南部磁场边界，这一次打开红色电磁力场与以往不同，博士团队利用从异常行星采集的频率波段，对红磁场进行点对点式穿透果然不负众望，经过几天的尝试，连接南北半球的通道终于被打开......
        </span>
        <div :class="`justify-between story_detail ${sectionActive === 3 && 'story_detail_active'}`">
          <div class="flex-col desc">
            <span>
              三个月前，博士通过观测发现，一颗在元星系中从未见过的行星，进入了元星球的环绕轨道中，并且这颗行星的质量和引力似乎出奇的大，不明行星周围环绕着越来越多的卫星，甚至其他行星的环绕轨迹，都开始受到了这颗不明高质量行星的影响，博士似乎感觉到了什么。
            </span>
            <span>
              非常巧合的是，这颗不明行星似乎也被一股神秘的磁场包围，而这个磁场的特征，居然和航天局提供的南半球笼罩的磁场特征，出奇的相似，此刻，博士的内心变得更加不安，通过严密的计算和分析，博士团队有了一个较为清晰的答案，不明行星的的构成与南半球大概率为，同一种物质，一种可以散发可见电磁波的高密度超重物质，这种物质也是元星球从北到南重力逐渐增大的根本原因。
            </span>
            <span>
              如果数据分析得无误，这颗不明行星将会在218.5天后，与元星球相撞，博士连续3天无休止地重复推演计算
            </span>
            <span>
              但得到的结果与时间都是一样，于是，博士连夜会见了国家首脑，并在第二天紧急召开了北部联合国最高会议，商讨应对即将到来的元末日，至此，元计划应运而生，但北部对于南部的认知仅限于超重物质的存在，所以这次对南部的大规模探索，充满着未知的风险，但他们别无选择，因为博士深刻地明白......
            </span>
            <span>未完待续 更多内容关注公众号获取</span>
          </div>
          <div class="flex-col items-center scan_code_wrapper">
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62cebae603330d00110d3d2c/16580460030079475322.png"
              class="scan_image"
            />
            <span class="scan_code_title">元计划公众号</span>
          </div>
        </div>
        <div :class="`section-more-icon  ${sectionActive === 3 && 'section_hidden'}`" />
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
    return {
      sectionActive: false,
      currentIndex: 0,
      timer: null
    }
  },
  methods: {
    setSectionActive (e, activeIndex) {
      if (!this.sectionActive) this.sectionActive = activeIndex
    },
    setSectionHidden (e) {
      e.stopPropagation()
      this.sectionActive = false
    }
  }
}
</script>

<style scoped lang="scss">
.web-container {
    display: flex;
    flex-direction: column;

    .banner {
    background-image: url('../../assets/banner@2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 33.3rem;

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

    .story_list {
    height: 30.81rem;
    margin-top: 3.53rem;
    padding: 0 3.47rem;
    position: relative;
    cursor: pointer;

    .part-one {
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        z-index: 1;

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

    .section_9 {
        height: 15.4375rem;
        padding: 2.61rem 1.66rem 2.94rem;
        margin-top: 0;
        background-image: url('../../assets/session3@2x.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        transition: all 0.5s;
        z-index: 3;
        text-align: left;
        position: relative;

        &.active {
        height: 30.81rem;
        margin-top: -15.5rem;
        background-size: cover;
        background-position: 55% 100%;
        cursor: default;
        }

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
        width: 60%;

        &.section_hidden {
            display: none;
        }
        }
    }

    .story_detail {
        display: none;
        flex: 1;
        opacity: 0;
        margin-top: 2.42rem;
        align-items: flex-end;

        &.story_detail_active {
        display: flex;
        opacity: 1;
        }

        .desc {
        width: 60%;
        height: 100%;

        & > span {
            text-indent:24px;
            color: #ffffff;
            font-size: 0.63rem;
            font-family: PingFang SC;
            line-height: 1.38rem;
            text-align: justify;
        }
        }
        .scan_code_wrapper {
        width: 5.16rem;

        .scan_image {
            width: 4.16rem;
            height: 4.13rem;
        }
        .scan_code_title {
            margin-top: 0.33rem;
            color: #ffffff;
            font-size: 0.63rem;
            font-family: PingFang SC;
        }
        }
    }

    .cloes_active_icon {
        padding: 0 0 3px 0;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 1.5rem;
        background-color: #fff;
        opacity: 0.8;
        border-radius: 50%;
        color: #000;
        display: none;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;

        &.icon_active {
        display: flex;
        }
    }

    .equal-division-item {
        height: 15.4375rem;
        width: 50%;
        margin-right: 0%;
        background-color: #000d22;
        position: relative;
        background-image: url('../../assets/session1@2x.png');
        // background-size: 100% 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        position: relative;
        padding: 2.56rem 1.68rem 2.96rem;
        transition: all 0.5s;
        z-index: 3;
        overflow: hidden;

        &.active {
        width: 100%;
        margin-right: -50%;
        z-index: 10;
        height: 30.86rem;
        margin-bottom: -15.5rem;
        cursor: default;
        }

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

        &.section_hidden {
            display: none;
        }
        }
    }

    .equal-division-item_1 {
        height: 15.4375rem;
        width: 50%;
        margin-left: 0%;
        background-color: #072e33;
        position: relative;
        background-image: url('../../assets/session2@2x.png');
        // background-size: 100% 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        padding: 2.56rem 1.68rem;
        transition: all 0.5s;
        z-index: 3;
        overflow: hidden;

        &.active {
        width: 100%;
        margin-left: -50%;
        z-index: 10;
        height: 30.86rem;
        margin-bottom: -15.5rem;
        cursor: default;
        }

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

        &.section_hidden {
            display: none;
        }
        }
    }
    }

    .section-more-icon {
    margin-top: 1.83rem;
    background-color: #ffffff;
    width: 1.91rem;
    height: 0.36rem;

    &.section_hidden {
        display: none;
    }
    }
}
</style>
