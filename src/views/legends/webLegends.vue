<template>
  <div class="flex-col web-legends-page">
    <div class="legends-banner"><!--*--></div>
    <div class="justify-between query-wrapper">
      <div class="flex-row">
        <YuanSelect :selectOptions="marketOptions" :value="marketType" placeholder="市场类型" />
        <YuanSelect
          :selectOptions="themeOptions"
          :value="themeClassify"
          class="theme-select"
          placeholder="主题分类"
        />
        <YuanSelect
          :selectOptions="moduleOptions"
          :value="moduleClassify"
          class="module-select"
          placeholder="模块分类"
        />
      </div>
      <YuanSelect
        :selectOptions="sortOptions"
        :value="sortMethods"
        class="sort-select"
        placeholder="排序方式"
      />
    </div>
    <div class="flex-col grid-container">
      <div class="grid-main">
        <div v-for="item in 21" :key="item" class="flex-col grid-item">
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
    <YuanFooter />
  </div>
</template>

<script>
import YuanFooter from '../../components/YuanFooter.vue'
import YuanSelect from '../../components/YuanSelect.vue'
export default {
  components: { YuanFooter, YuanSelect },
  data () {
    return {
      marketOptions: [{
        value: '版权品',
        label: '版权品'
      }],
      themeOptions: [{
        value: '元计划',
        label: '元计划'
      }],
      moduleOptions: [{
        value: '元计划·南',
        label: '元计划·南'
      }, {
        value: '元计划·北',
        label: '元计划·北'
      }],
      sortOptions: [{
        value: '价格从高到低',
        label: '价格从高到低'
      }, {
        value: '价格从低到高',
        label: '价格从低到高'
      }, {
        value: '按照时间排序',
        label: '按照时间排序'
      }],
      marketType: '',
      themeClassify: '',
      moduleClassify: '',
      sortMethods: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.web-legends-page {
  background-color: #000000;
  width: 100%;
  height: 100%;
  min-width: 820px;
  overflow-y: auto;
  overflow-x: hidden;

  .legends-banner {
    height: 39.06vw;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566199051403.png');
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .query-wrapper {
    padding: 23.5px 159.5px;
    background-color: #000000;

    .copyright-name-select {
      width: 135px;
      height: 50px;
    }

    .theme-select, .module-select {
      margin-left: 58px;
    }

    .sort-select {
      width: 195px;
    }
  }
  .grid-container {
    padding: 0 160px 100px;

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
        cursor: pointer;

        .item-img {
          width: 300px;
          height: 300px;
          border-radius: 6px 6px 0px 0px;
          background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5ef0815c72734300119dba44/62e69336e82d800011e8f321//16592782566230174887.png');
          background-size: cover;
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
