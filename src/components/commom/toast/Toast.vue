<template>
  <!-- 组件的使用方式，需要传入对应的message以及isShow -->
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
  <!-- 以插件的形式使用 -->
  <!-- <div class="toast">
    <div>{{message}}</div>
  </div> -->
</template>

<script>
  export default {
    name:'Toast',

    /* 以组件的形式使用时，需要传入的参数 */
    /*
    props: {
      message: {
        type: String,
        default() {
          return ' '
        }
      },
      isShow: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    */

    /* 以插件的形式使用时，需要的数据 */
    data() {
      return {
        message: '',
        isShow: false,
      }
    },
    methods: {
      show(message="默认文字", duration=2000) {
        this.message = message;
        this.isShow = true;

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        },duration)
      }
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    border-radius: 10px;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    color:white;
    background-color: rgba(0,0,0, .7);
  }
</style>