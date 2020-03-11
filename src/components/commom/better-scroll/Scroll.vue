<template>
  <!-- ref属性：一般用于子组件的绑定； 拿取元素时为，this.$refs.ref名字-->
  <div class="wrapper" ref="wrapper">
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name:'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0,
      },
      pullUpLoad: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        //probeType = 3所有的滚动位置都会本监视到
        probeType: this.probeType,
        //保证原生的元素可以被监听到
        click: true,
        pullUpLoad: this.pullUpLoad,
      })

      //2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('scroll', position)
      })

      //这个属性是用来定义可以滑动的区域高度
      //console.log(this.scroll)
      //this.scroll.scrollerHeight

      //3.监听上拉事件
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      //scrollTo方法回到页面的某一个位置
      scrollTo(x, y, time=500) {
        //逻辑&& 对事件进行判断，如果this.scroll存在才会执行后面的代码 
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
        // console.log('refresh刷新操作次数')
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0;
      },
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  
</style>