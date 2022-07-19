<template>
  <div class="flex-col plan-page">
   <PcPlan/>
   <WebPlan/>
   </div>
</template>

<script>
// import YuanNav from '../../components/YuanNav.vue'
// import YuanFooter from '../../components/YuanFooter.vue'
import PcPlan from './pcPlan.vue'
import WebPlan from './webPlan.vue'
export default {
  components: { WebPlan, PcPlan },
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
