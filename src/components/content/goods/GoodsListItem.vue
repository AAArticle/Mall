<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load='imageLoad'>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'GoodsListItem',
    props: {
      goodsItem:{
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imageLoad() {
        // console.log('imgLoad');
        this.$bus.$emit('itemImageLoad');
      },
      itemClick() {
        //console.log('跳转到详情页');
        this.$router.push('/details/' + this.goodsItem.iid);
      },
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .goods-list-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    /* text-overflow 属性规定当文本溢出包含元素时发生的事情。 ellipsis显示... clip不显示*/
    text-overflow: ellipsis;
    /* white-space 规定段落中的文本不进行换行 */
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right:20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .collect {
    width: 10px;
    height: 10px;
    display: inline-block;
    /* float: left; */
  }
  .goods-info .collect::before {
    position: absolute;
    content: '';
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/collect.svg") 0 0/14px 14px;
  }
</style>