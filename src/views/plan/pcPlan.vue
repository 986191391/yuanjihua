<template>
  <div class="flex-col pc-plan-page">
    <YuanNav />
    <div class="flex-col plan-content">
    <div class="flex-col plan-banner">
       <div class="flex-col slogin">
        <div class="flex-col items-center plan-label">
          <span class="text_4">roadmap</span>
          <span class="text_5">规划蓝图</span>
        </div>
        <span class="plan-slogin">一起建设中国制造的全球共识</span>
      <div v-for="item in dataList" :key="item" class="content">
      <div class="text_6">{{item}}</div>
      <div style="border-left: 1px dashed #FFF;height:1rem;line-height:1rem; margin: 0 auto"></div>
      </div>
      </div>
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
      dataList: [
        '元计划故事背景介绍发布',
        '元计划动漫宣传片发布',
        '元计划人物形象版权品发售',
        '连载漫画故事线持续发布',
        '元计划南北冲突第战役打响',
        '启动元计划空投计划',
        '开启元计划形象周期性选拔参与实体赋能',
        '上线天猫，抖音等线上品牌店 推出首款元计划手办并持续发布线下自研周边产品',
        '邀请签约娱乐文化体育等产业高端流量明星加入元计划',
        '与一线国产服装品牌合作联名发布元计划潮牌服饰',
        '元计划IP同名小说进入发布倒计时',
        '元计划空间碎片空投开始',
        '元计划同款游戏进入内测倒计时',
        '链游元宇宙发布，元计划元宇宙世界发布......'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.pc-plan-page{
  .plan-content{
    background-image: url('../../assets/plan/pcbg.png');
    // background-repeat: no-repeat;
     background-size: contain;
     background-position: center center;
     height: 100vh;
    .plan-banner {
      padding: 4rem 1rem 0 1rem;
      .text_6{
          font-family: PingFang SC;
          font-style: normal;
          font-weight: 400;
          font-size: 0.18rem;
          text-align: center;
          color: #FFFFFF;
          margin-bottom: 0.22rem;
        }
    .slogin {
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
       margin-bottom:3.59rem;
      }
      .content{
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 2.5rem;
      }
      .border{
        width: 0.16rem;
        height: 0px;
        border: 0.05rem dashed #FFFFFF;
        transform: rotate(90deg);
        margin: auto;
      }
    }
  }

  }

}

</style>
