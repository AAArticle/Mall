<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name:'BackTop',
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 47px;
  }
  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>