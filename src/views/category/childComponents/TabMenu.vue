<template>
  <div id="tab-menu">
    <scroll class="menu-list">
      <div class="menu-list-item"
           v-for="(item,index) in ItemList"
           :key="index"
           :class="{active: index === currentIndex}"
           @click="itemClick(index)">
        {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/commom/better-scroll/Scroll';

  export default {
    name:'TabMenu',
    components: {
      Scroll,
    },
    props: {
      ItemList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('selectItem',index);
      }
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  #tab-menu {
    height: 100%;
    width: 100px;
    background-color: #f6f6f6;
    box-sizing: border-box;
  }
  .menu-list {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .menu-list-item.active{
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
    background-color: #fff;
    font-weight: 800;
  }
</style>