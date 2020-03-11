<template>
  <div class="bottom-bar">
    <div class="bar-item">
      <div class="bar-item bar-left">
        <div>
          <i class="icon service"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="icon select"></i>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="bar-item bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailsBottomBar',
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .bottom-bar {
    height: 47px;
    background-color: white;
    position: fixed;
    /* bottom:49px; */
    z-index:12;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
    text-align: center;
    margin-left: 17px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 4px auto 2px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    color: #fff;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }
</style>