<template>
  <div class="web-nav justify-between section_3">
    <img
      src="../assets/logo.png"
      class="image"
    />
    <div class="flex-row group">
      <router-link
        v-for="(item, index) in routeInfo"
        :key="index"
        :class="`nav-item ${active !== item.active && 'justify-center'}`" :to="item.path"
      >
        <img
          v-if="active === item.active"
          src="../assets/highlight.png"
          class="high-light-img"
        />
        <span class="text">{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active: 0,
      routeInfo: [{
        title: '首页',
        path: '/',
        active: 0
      }, {
        title: '关于我们',
        path: '/about',
        active: 1
      }, {
        title: '规划图',
        path: '/plan',
        active: 2
      }, {
        title: '图例展示',
        path: '/',
        active: 3
      }],
      navRelate: {
        shouye: 0,
        about: 1,
        plan: 2
      }
    }
  },
  methods: {
  },
  watch: {
    $route: {
      handler: function (to, from) {
        this.active = this.navRelate[to.name]
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
  .web-nav {
    padding: 0 5rem;
    height: 50px;
    background-image: linear-gradient(180deg, #00000080 25.5%, #00000000 100%);

    .image {
      margin-top: 0.5rem;
      align-self: center;
      width: 6.28rem;
      height: 2.19rem;
    }

    .group {
      margin-right: 0.53rem;

      .nav-item {
        margin: 0 0.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;

        & > span {
          margin-top: 5px;
        }

        .high-light-img {
          width: 2.09rem;
          height: 1.03rem;
        }

        & > span {
          min-width: 2.09rem;
        }
      }

      .text {
        align-self: center;
        color: #ffffff;
        font-size: 0.81rem;
        font-family: PingFang SC;
        font-weight: 200;
        line-height: 0.75rem;
      }

      .text_1 {
        margin-left: 2.42rem;
        align-self: center;
        color: #ffffff;
        font-size: 0.81rem;
        font-family: PingFang SC;
        font-weight: 200;
        line-height: 0.75rem;
      }
      .text_2 {
        margin-left: 2.7rem;
        align-self: center;
        color: #ffffff;
        font-size: 0.81rem;
        font-family: PingFang SC;
        font-weight: 200;
        line-height: 0.73rem;
      }
      .text_3 {
        margin-left: 2.81rem;
        align-self: center;
        color: #ffffff;
        font-size: 0.81rem;
        font-family: PingFang SC;
        font-weight: 200;
        line-height: 0.73rem;
      }
    }
  }
</style>
