<template>
  <div class='recommend'>
    <div v-for="(item,index) in recommends" :key="index" class='recommend-item'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeRecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color:#eee;
    padding: 10px 0px 10px 0px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item a{
    text-decoration: none;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>