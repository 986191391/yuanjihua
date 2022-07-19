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
      <div class="process-list">
        <div v-for="(item, index) in processList" :key="index"  class="process-line">
          <template v-if="index % 2 === 0">
            <div class="line-left">
              <span :style="{ marginRight: 10 }">{{item}}</span><HalfCircle direction="left" />
            </div>
            <div></div>
          </template>
          <template v-else>
            <div></div>
            <div class="line-right"><HalfCircle direction="right" /><span :style="{ marginLeft: 10 }">{{item}}</span></div>
          </template>
        </div>
      </div>
    </div>
    <YuanFooter />
  </div>
</template>

<script>
import YuanNav from '../../components/YuanNav.vue'
import YuanFooter from '../../components/YuanFooter.vue'
import HalfCircle from './halfCircle.vue'

export default {
  components: { YuanNav, YuanFooter, HalfCircle },
  data () {
    return {
      processList: [
        '元计划故事背景介绍发布',
        '元计划动漫宣传片发布',
        '元计划人物形象版权品发售',
        '连载漫画故事线持续发布',
        '元计划南北冲突第战役打响',
        '启动元计划空投计划',
        '开启元计划形象周期性选拔参与实体赋能',
        '上线天猫，抖音等线上品牌店 推出首款元计划手办并持续发布线下自研周边产品',
        '宣布项目经济模型重要信息',
        '邀请签约娱乐文化体育等产业高端流量明星加入元计划',
        '与一线国产服装品牌合作联名发布元计划潮牌服饰',
        '元计划IP同名小说进入发布倒计时',
        '元计划同名动漫电影筹备开拍',
        '元计划冠名流量综艺或赛事',
        '元计划空间碎片空投开始',
        '元计划同款游戏进入内测倒计时',
        '元计划元宇宙世界进入内测倒计时',
        '链游元宇宙发布，元计划元宇宙世界发布......'
      ]
    }
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
    .process-list {
      width: 100%;
      color: #fff;
      font-size: 14px;
      margin-top: -20rem;

      .process-line {
        padding: 15px 0;
        display: flex;

        & > div {
          width: 50%;
        }

        .line-left {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-right: -10px;
        }

        .line-right {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-left: -10px;
        }
      }
    }
  }
}

</style>
