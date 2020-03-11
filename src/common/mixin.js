/* 两个组件之间都需要使用的内容可以使用混入 */
import {debounce} from './utills';

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    //进行防抖动操作
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      refresh();
    }
    //监听图片的加载完成
    //使用事件总线的方式来监听事件，需要在main.js中添加相应的事件总线的设置
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    //console.log('我是mixin中的内容')
  }
}