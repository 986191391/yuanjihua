<template>
  <div class="web-footer">
    @2022 深圳行者数学艺术有限公司官网 版权所有. 粤ICP备2022071585号-1
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .web-footer {
    padding: 10px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.63rem;
    color: #fff;
  }
</style>
