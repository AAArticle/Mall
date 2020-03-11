<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar>
      <slot slot="center">购物车({{cartlength}})</slot>
    </nav-bar>

    <!-- 商品的列表 -->
    <cart-list/>

    <!-- 底部的汇总信息 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import CartList from './childComponents/CartList';
  import CartBottomBar from './childComponents/CartBottomBar'

  import NavBar from 'components/commom/navbar/NavBar';

  import { mapGetters } from 'vuex'
  /* mapGetters 辅助函数仅仅是将store中的getter映射到局部计算属性中 */

  export default {
    name:'Shoppingcart',
    components: {
      NavBar,
      CartList,
      CartBottomBar,
    },
    computed: {
      //两种写法，对象形式的写法可以将getters中的方法换个名字
      //...mapGetters(['cartLength'])
      ...mapGetters({
        cartlength: 'cartLength'
      })
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: white;
    font-weight: 500px;
  }
</style>