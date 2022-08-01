<template>
  <div class="flex-col mobile-legends-page">
    <van-radio-group v-model="radio">
      <van-radio name="1">单选框 1</van-radio>
      <van-radio name="2">单选框 2</van-radio>
    </van-radio-group>
  </div>
</template>

<script>
export default {
  components: { },
  data () {
    return {
      radio: '1'
    }
  }
}
</script>

<style scoped lang="scss">
  .mobile-legends-page {
    display: flex;
  }
</style>
