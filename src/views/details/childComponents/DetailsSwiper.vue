<template>
  <div id='details-swiper'>
    <swiper class="image-swiper">
      <swiper-item v-for="(image,index) in topImages" :key="index">
        <img :src="image" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from 'components/commom/swiper/Swiper'
  import SwiperItem from 'components/commom/swiper/SwiperItem'

  export default {
    name:'DetailsSwiper',
    components: {
      Swiper,
      SwiperItem,
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .image-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>