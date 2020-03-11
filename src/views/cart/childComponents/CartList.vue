<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartlist" 
                      :key="index"
                      :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import CartListItem from './CartListItem';
  import Scroll from 'components/commom/better-scroll/Scroll';

  export default {
    name:'CartList',
    computed: {
      ...mapGetters({
        cartlist: 'cartList'
      })
    },
    components: {
      Scroll,
      CartListItem,
    },
    activated() {
      this.$refs.scroll.refresh()
      // console.log(this.$refs.scroll.scroll.scrollerHeight)
    },
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .content {
    overflow: hidden;
    height: calc(100vh - 133px);
  }
</style>