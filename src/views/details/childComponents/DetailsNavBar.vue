<template>
  <div id="DetailsNavBar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(title,index) in titles" :key="index" 
             class="title-item" 
             @click="titleClick(index)"
             :class="{active: index === currentIndex}">
             {{title}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/commom/navbar/NavBar';

  export default {
    name:'DetailsNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0,
      }
    },
    methods: {
      titleClick(index) {
        // console.log('titleClick');
        this.currentIndex = index;
        this.$emit('titleClick', index);
      },
      backClick() {
        this.$router.back(-1);
      },
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 5px;
    margin-left: 1px;
  }
</style>