<template>
  <div id='home'>
    <nav-bar class="home-nav" @click.native='backClick'><div slot="center">购物街</div></nav-bar>
     <tab-control :titles="['流行','新款','精选']" 
                    class="tab-control"
                    @tabClick="tabClick"
                    ref="tabControl1"
                    v-show="isTabFixed"/>
    <!-- content属性用于决定滚动区域大小的控制 -->
    <scroll class="content" 
            ref='scroll' 
            :probe-type="3" 
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" 
                    @tabClick="tabClick"
                    ref="tabControl2"/>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 组件不能直接监听，需要监听需要加上修饰符.native -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComponents/HomeSwiper';
  import RecommendView from './childComponents/RecommendView';
  import FeatureView from './childComponents/FeatureView';

  import NavBar from 'components/commom/navbar/NavBar';
  import TabControl from 'components/commom/tabcontrol/TabControl';
  import GoodsList from 'components/content/goods/GoodsList';
  import Scroll from 'components/commom/better-scroll/Scroll';
  import BackTop from 'components/commom/backtop/BackTop'

  import {itemListenerMixin} from 'common/mixin'
  import {
    getHomeMultidata,
    getHomeGoods,
    } from 'network/home';

  export default {
    name:'Home',
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    mixins: [itemListenerMixin],
    activated() {
      this.$refs.scroll.refresh()      
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()

      //2.请求商品的一组数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      //this.getBookdata()
    },
    mounted() {
      /*  原本mounted的方法进行抽离，放入mixin(混入)中，生命周期函数可以在多个地方引用 */
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /* 事件监听相关的方法 */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index
      },
      backClick() {
        //拿到Scroll组件对象中的scroll对象的scrollTo方法回到某个位置
        this.$refs.scroll.scrollTo(0, 0);
      },
      contentScroll(position) {
        //console.log(position); 
        //1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 200;

        //2.决定tabControl是否吸顶（position：fixed）
        this.isTabFixed = (-position.y) > this.$refs.tabControl2.$el.offsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        //需要等待图片加载完成再获取
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },

      /* 网络请求相关的方法 */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          //console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          //console.log(res)
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          this.$refs.scroll.finishPullUp();
        })
      },
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  #home {
    /* padding-top: 44px; */
    /* vh viewport height 适口高度 */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动的css设置 */
    /* position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 9; */
  }
  /* 可以适配的浏览器的原生吸顶css实现
  .tab-control {
    position: sticky;
    top:44px;
    z-index: 8;
  }
  */
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }

  /* 方案一 */
  /* .content {
    height: calc(100% - 93px);
    margin-top: 44px;
    overflow: hidden;
  } */
  /* 方案二 */
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }

</style>