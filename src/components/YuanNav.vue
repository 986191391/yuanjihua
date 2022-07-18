<template>
  <div class="yuanjihua-nav">
    <div class="web-nav justify-between nav_container">
      <img
        src="../assets/logo.png"
        class="nav_active_image"
      />
      <div class="flex-row nav">
        <router-link
          v-for="(item, index) in routeInfo"
          :key="index"
          :class="`nav-item ${active === item.active ? 'nav-active' : ` ${active} ${item.active}`}`" :to="item.path"
        >
          <span class="text">{{ item.title }}</span>
        </router-link>
      </div>
    </div>
    <div class="pc-nav">
      <i class="nav-icon el-icon-back" @click="() => {this.$router.go(-1)}" />
      <span class="nav-title">{{navTitle}}</span>
      <i class="nav-icon el-icon-s-unfold" @click="() => {this.isNavModalShow = !this.isNavModalShow}"/>
      <div v-if="isNavModalShow" class="nav-list-modal" @click="onPcNavClick">
        <router-link class="nav-list-item" to="/">首页</router-link>
        <router-link class="nav-list-item" to="/about">关于我们</router-link>
        <router-link class="nav-list-item" to="/plan">规划图</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    navTitle: {
      default: '元计划'
    }
  },
  data () {
    return {
      active: 0,
      routeInfo: [
        {
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
        }
      ],
      navRelate: {
        homeIndex: 0,
        about: 1,
        plan: 2
      },
      isNavModalShow: false
    }
  },
  methods: {
    onPcNavClick () {
      this.isNavModalShow = false
    }
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
  .yuanjihua-nav {
    height: 44px;
  }

  .web-nav {
    padding: 0 5rem;
    height: 50px;
    background-image: linear-gradient(180deg, #00000080 25.5%, #00000000 100%);

    .nav_active_image {
      margin-top: 0.5rem;
      align-self: center;
      width: 6.28rem;
      height: 2.19rem;
    }

    .nav {
      margin-right: 0.53rem;

      .nav-item {
        margin: 0 0.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        justify-content: center;

        &.nav-active {
          background-image: url('../assets/highlight.png');
          background-size: 25px 15px;
          background-position: 50% 0;
          background-repeat: no-repeat;
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
    }
  }

  .pc-nav {
    padding: 0 5px;
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;

    .nav-icon {
      width: 44px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      cursor: pointer;
    }

    .nav-list-modal {
      width: 100px;
      height: 135px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      right: 0;
      top: 44px;
      background-color: #fff;

      .nav-list-item {
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #000;

        &:not(:last-child) {
          border-bottom: 1px solid #eee;
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    .yuanjihua-nav {
      .web-nav {
        display: flex;
      }
      .pc-nav {
        display: none;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .yuanjihua-nav {
      .web-nav {
        display: none;
      }
      .pc-nav {
        display: flex;
      }
    }
  }
</style>
