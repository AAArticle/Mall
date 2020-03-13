<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item link='/home'>
        <img slot="item-icon" src="~assets/img/tabbar/home/home.png" alt=" ">
        <img slot="item-icon-active" src="~assets/img/tabbar/home/acthome.png" alt=" ">
        <div slot="item-text" class="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link='/category' activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/category/category.png" alt=" ">
        <img slot="item-icon-active" src="~assets/img/tabbar/category/actcategory.png" alt=" ">
        <div slot="item-text" class="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link='/cart'>
        <img slot="item-icon" src="~assets/img/tabbar/cart/shoppingcart.png" alt=" ">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart/actshoppingcart.png" alt=" ">
        <div slot="item-text" class="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link='/profile'>
        <img slot="item-icon" src="~assets/img/tabbar/profile/profile.png" alt=" ">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile/actprofile.png" alt=" ">
        <div slot="item-text" class="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>

  </div>
</template>

<script>
  import TabBar from 'components/commom/tabbar/TabBar'
  import TabBarItem from 'components/commom/tabbar/TabBaritem'

  export default {
    name:'MainTabBar',
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .main-tab-bar{
    position: relative;
    z-index: 7;
  }
  .item-text{
    margin-top: 5px;
  }
</style>