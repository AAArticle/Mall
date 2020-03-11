<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/common/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name:'CheckButton',
    props: {
      isChecked: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check {
    color: var(--color-tint);
    background-color: var(--color-tint);
  }
</style>