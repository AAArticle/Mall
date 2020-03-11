<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'

  export default {
    name:'GoodsList',
    props:{
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem,
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .goods {
    display: flex;
    /* 是否在一行内包裹 */
    flex-wrap: wrap;
    /* 使得元素均等分：从中间开始划分 */
    justify-content: space-around;
    padding:2px;
  }

</style>