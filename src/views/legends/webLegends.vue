<template>
  <div class="flex-col legends-page">
    <div class="legends-banner"><!--*--></div>
    <div class="justify-between query-wrapper">
      <div class="flex-row">
        <div class="flex-row section_4 view">
          <span class="text">版权品</span>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566314461043.png"
            class="image"
          />
        </div>
        <div class="flex-row section_4">
          <span class="text">元计划</span>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566314461043.png"
            class="image"
          />
        </div>
        <div class="flex-row section_4">
          <span class="text">元计划·南</span>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566314461043.png"
            class="image"
          />
        </div>
      </div>
      <div class="flex-row section_5">
        <span class="text_4">价格从高到低</span>
        <img
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566314461043.png"
          class="image image_4"
        />
      </div>
    </div>
    <div class="flex-col grid-container">
      <div class="grid-main">
        <div v-for="item in 5" :key="item" class="flex-col grid-item">
          <div class="flex-col items-start item-img">
            <div class="flex-col copyright-icon">版</div>
          </div>
          <div class="flex-col item-desc">
            <div class="justify-between items-center">
              <span class="product-name">06722·南</span>
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566261557719.png"
                class="xxx"
              />
            </div>
            <div class="justify-between items-center price-label">
              <div class="price">
                3,999.00
              </div>
              <div class="flex-row">
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566324659619.png"
                  class="bus-icon"
                />
                <span class="items-center bus-name">元计划</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.legends-page {
  background-color: #000000;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .legends-banner {
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566199051403.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // height: 625px;
    height: 39.06vw;
  }
  .query-wrapper {
    padding: 23.5px 159.5px;
    background-color: #000000;
    .section_5 {
      padding: 11.5px 22.5px 14px;
      border-radius: 6px;
      height: 49px;
      border: solid 1px #ffffff33;
      .text_4 {
        margin-top: 3px;
        color: #ffffff;
        font-size: 20px;
        font-family: PingFang SC;
        line-height: 18.5px;
      }
      .image_4 {
        margin-left: 8.5px;
      }
    }
    .section_4 {
      margin-left: 58px;
      padding: 11.5px 23px 14px;
      border-radius: 6px;
      height: 49px;
      border: solid 1px #ffffff33;
      .text {
        margin-top: 3px;
        color: #ffffff;
        font-size: 20px;
        font-family: PingFang SC;
        line-height: 18.5px;
      }
    }
    .view {
      margin-left: 0;
    }
    .image {
      margin-left: 8px;
      flex-shrink: 0;
      width: 20px;
      height: 20px;
    }
  }
  .grid-container {
    padding: 0 160px 252px;

    .grid-main {
      border-top: 1px solid #ffffff33;
      padding-top: 3.75rem;
      padding-bottom: 25px;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, 300px);
      row-gap: 1.5rem;
      column-gap: 1.5rem;

      .grid-item {
        width: 300px;
        height: 400px;
        background-color: #ffffff;
        border-radius: 6px;
        .item-img {
          width: 300px;
          height: 300px;
          border-radius: 6px 6px 0px 0px;
          background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566230174887.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }

        .item-desc {
          width: 300px;
          height: 100px;
          padding: 12px 20px 20px;
          font-size: 20px;
          font-family: PingFang SC;

          .product-name {
            margin-top: 5px;
            color: #000000;
            line-height: 18.5px;
          }

          .xxx {
            width: 59px;
            height: 32px;
          }
          .price-label {
            margin-top: 10px;
            font-family: PingFang SC;

            .price {
              line-height: 20px;
              color: #0056ff;
              font-size: 22px;
              font-weight: 600;
              line-height: 20px;

              &::before {
                content: '¥';
                font-size: 12px;
                line-height: 8.5px;
              }
            }

            .bus-icon {
              flex-shrink: 0;
              width: 28px;
              height: 28px;
            }

            .bus-name {
              margin-left: 4.5px;
              color: #000000;
              font-size: 14px;
              line-height: 13px;
            }
          }
        }

        .copyright-icon {
          margin-left: 20px;
          background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782570392218969.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 25px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-size: 16px;
          font-family: PangMenZhengDao;
          line-height: 11.5px;
        }
      }
    }
  }
}
</style>
