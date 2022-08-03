<template>
  <div class="flex-col mobile-legends-page">
    <div class="mobile-legends-banner"><!--*--></div>
    <div class="flex-row filter-wrapper">
      <div class="flex-row filter-label" @click="onFilterClick">
        <img
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16593666915465094398.png"
          class="filter-icon"
        />
        <span class="text_1">筛选</span>
        <div class="section_5"><!--*--></div>
      </div>
      <div class="justify-center filter-items">
        <div class="flex-col items-center filter-item"><span class="text_15">元计划·北</span></div>
        <div class="flex-col items-center filter-item"><span>五官111</span></div>
        <div class="flex-col items-center filter-item"><span>五官222</span></div>
      </div>
    </div>
    <div class="flex-col grid-container">
      <div class="grid">
        <div v-for="item in 5" :key="item" class="flex-col grid-item">
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16593666915429435871.png"
            class="item-img"
          />
          <div class="flex-col item-desc">
            <div class="justify-between product-name items-center">
              <span>06722·南</span>
              <div class="flex-col items-center copyright-icon">版</div>
            </div>
            <div class="justify-between brand">
              <div class="flex-row">
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566324659619.png"
                  class="image_8"
                />
                <span class="text_16">元计划</span>
              </div>
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321/f5131f93130f62c3d8e5673ede019487.png"
                class="xxx"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <YuanFooter />
    <el-drawer
      size="66%"
      :visible.sync="isDrawerShow"
      direction="ltr"
      :before-close="handleClose"
    >
      <van-collapse v-model="drawerValues">
        <van-collapse-item title="模块分类" name="1">内容</van-collapse-item>
        <van-collapse-item title="特性分类" name="2">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</van-collapse-item>
      </van-collapse>
      <div class="drawe-btn-wrapper">
        <div class="cancel-btn">取消</div>
        <div class="confirm-btn">确定</div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import YuanFooter from '../../components/YuanFooter.vue'
export default {
  components: { YuanFooter },
  data () {
    return {
      isDrawerShow: false,
      drawerValues: ['1']
    }
  },
  methods: {
    onFilterClick () {
      this.isDrawerShow = true
    },
    handleClose (done) {
      done()
    }
  }
}
</script>

<style scoped lang="scss">
  .mobile-legends-page {
    background-color: #000000;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    min-height: 100vh;
    .mobile-legends-banner {
      background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16593666915409770447.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      height: 11.13rem;
    }
    .filter-wrapper {
      margin-top: -0.88rem;
      background-color: #000000;
      border-radius: 1rem 1rem 0px 0px;
      border-bottom: solid 0.063rem #ffffff33;
      position: relative;
      padding: 0.84rem 1rem;
      font-family: PingFang SC;
      .filter-label {
        margin: 0.22rem 0;
        .filter-icon {
          flex-shrink: 0;
          width: 1.13rem;
          height: 1.13rem;
        }
        .text_1 {
          margin: 0.16rem 0 0.16rem 0.59rem;
          color: #ffffff;
          font-size: 0.88rem;
          line-height: 0.81rem;
        }
        .section_5 {
          margin-left: 0.72rem;
          flex-shrink: 0;
          background-color: #ffffff33;
          width: 0.063rem;
          height: 1.13rem;
        }
      }
      .filter-items {
        margin-left: 0.66rem;
        flex: 1 1 auto;
        font-size: 0.88rem;
        line-height: 0.81rem;
        color: #ffffff;
        .filter-item {
          padding: 0.34rem 0 0.28rem;
          border-radius: 0.38rem;
          width: 5.25rem;
          height: 1.56rem;
          border: solid 0.063rem #ffffff4d;
          .text_15 {
            font-family: PingFang SC;
          }

          &:not(:last-child) {
            margin-left: 0.63rem;
          }
        }
      }
    }
    .grid-container {
      padding: 1rem;
      .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1.06rem;
        column-gap: 0.75rem;
        .grid-item {
          background-color: #ffffff;
          border-radius: 0.38rem;
          .item-img {
            border-radius: 0.38rem 0.38rem 0px 0px;
            width: 10.38rem;
            height: 10.38rem;
          }
          .item-desc {
            padding: 0 0.2rem 0.2rem 0.2rem;
            font-family: PingFang SC;
            .product-name {
              padding: 0 0.78rem;
              color: #000000;
              font-size: 0.88rem;
              font-weight: 600;
              line-height: 0.81rem;
              .copyright-icon {
                margin-bottom: 0.28rem;
                padding: 0.25rem 0 0.47rem;
                background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16593666915471886793.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                width: 1.13rem;
                height: 1.25rem;
                color: #ffffff;
                font-size: 0.75rem;
                line-height: 0.53rem;
                font-family: PangMenZhengDao;
              }
            }
            .brand {
              padding: 0 0.5rem;
              .xxx {
                width: 1.16rem;
                height: 1.25rem;
              }
              .text_16 {
                margin-left: 0.28rem;
                align-self: center;
                color: #000000;
                font-size: 0.63rem;
                line-height: 0.56rem;
              }
            }
          }
          .image_8 {
            flex-shrink: 0;
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    // 修改侧边弹出栏的样式
    ::v-deep .el-drawer__wrapper .el-drawer__container .el-drawer {
      padding-top: 44px;
      background-color: #000;

      & > header {
        display: none;
      }

      .el-drawer__body {
        position: relative;
        .van-collapse {
          height: calc(100% - 50px);
          overflow: scroll;
          &::after { // 整体底部的border线
            display: none;
          }
          .van-collapse-item {
            &::after { // item底部的border线
              display: none;
            }

            .van-cell {
              background-color: rgba(98, 103, 148, 0.3);
              color: #fff;
              .van-cell__title {
                text-align: left;
                position: relative;

                & > span {
                  padding-left: 15px;
                  &::before {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 0;
                    width: 4px;
                    height: 18px;
                    background-color: #3478F6;
                  }
                }
              }
            }
            .van-collapse-item__wrapper .van-collapse-item__content {
              background-color: #000;
            }
          }
        }

        .drawe-btn-wrapper {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          display: flex;
          color: #fff;
          height: 50px;

          .cancel-btn {
            width: 40%;
            background: #1E1F2C;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .confirm-btn {
            flex: 1;
            background: #3478F6;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
</style>
