<template>
  <div id="details">
    <details-nav-bar class="details-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll"
            :probe-type="3" @scroll="contentScroll">
      <details-swiper :top-images="topImages"/>
      <details-base-info :goods="goods"/>
      <details-shop-info :shopinfo="shopinfo"/>
      <details-shows :detailinfo="detailinfo" @imageLoad="imageLoad"/>
      <details-param-info ref="params" :param-info="paramInfo"/>
      <details-comment-info  ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <details-bottom-bar @addToCart="addToCart"/>
    <!-- <toast :message="message" :is-show="isShow"/> -->
  </div>
</template>

<script>
  import DetailsNavBar from './childComponents/DetailsNavBar';
  import DetailsSwiper from './childComponents/DetailsSwiper';
  import DetailsBaseInfo from './childComponents/DetailsBaseInfo';
  import DetailsShopInfo from './childComponents/DetailsShopInfo';
  import DetailsShows from './childComponents/DetailsShows';
  import DetailsParamInfo from './childComponents/DetailsParamInfo';
  import DetailsCommentInfo from './childComponents/DetailsCommentInfo';
  import DetailsBottomBar from './childComponents/DetailsBottomBar';
  
  import Scroll from 'components/commom/better-scroll/Scroll';
  import GoodsList from 'components/content/goods/GoodsList';
  // import Toast from '../../components/commom/toast/Toast';

  import {getDetailsData, getRecommend, Goods, Shop, GoodsParam} from 'network/details/details';
  import {itemListenerMixin} from 'common/mixin';
  import {debounce} from 'common/utills';

  //将vuex中的actions方法映射到组件中，可以减少组件之间的耦合度
  import { mapActions } from 'vuex'

  export default {
    name:'Details',
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shopinfo: {},
        detailinfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        // message: '',
        // isShow: false,
      }
    },
    components: {
      DetailsNavBar,
      DetailsSwiper,
      DetailsBaseInfo,
      DetailsShopInfo,
      DetailsShows,
      DetailsParamInfo,
      DetailsCommentInfo,
      DetailsBottomBar,
      Scroll,
      GoodsList,
      // Toast,
    },
    methods: {
      ...mapActions(['addCart']),
      imageLoad() {
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
      },
      contentScroll(position) {
        // console.log(position)
        //1.获取y值
        const positionY = -position.y

        //2.positionY与themeTop进行对比
        const length = this.themeTopYs.length
        for(let i = 0; i < length; i++) {
          // if(this.currentIndex !== i && (
          //   (i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || 
          //   ( i === length - 1 && positionY > this.themeTopYs[i]))) {
          //     this.currentIndex = i;
          //     this.$refs.nav.currentIndex = this.currentIndex
          // }

          //过多的判断条件性能不高，进行优化，在数组最后添加一个极大值Number.MAX_VALUE
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
      },
      addToCart() {
        //获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.nowPrice;
        product.iid = this.iid;
        product.count = 1;

        //2.1将商品添加到购物车上
        // this.$store.dispatch('addCart',product).then(res => {
        //   console.log(res)
        // })

        //2.2使用映射后的方法 2.1/2.2本质上都是调用同一种方法
        this.addCart(product).then(res => {
          // this.isShow = true;
          // this.message = res;

          // setTimeout(() => {
          //   this.isShow = false;
          //   this.message = '';
          // },2000)

          this.$toast.show(res, 2000)
        })
      },
    },
    mixins: [itemListenerMixin],
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid;

      //2.根据iid请求数据
      getDetailsData(this.iid).then(res => {
        // 2.1.获取结果
        const data = res.result;

        //2.2进行返回数据的抽离
        this.topImages = data.itemInfo.topImages;

        //2.3商品信息分离抽取，封装在网络请求中
        this.goods =  new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        
        //2.4商店信息分离抽取
        this.shopinfo = new Shop(data.shopInfo)

        //2.5商品展示信息抽取
        this.detailinfo = data.detailInfo

        //2.6获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      
        //2.7获取评论的信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }

        //在渲染完DOM后的下一帧回调函数
        // this.$nextTick(() => {
        //   // 根据最新的数据，对应的DOM是被渲染出来了
        //   //但是图片依然没有加载完成(目前获取到的offsetTop不包含图片的高度)
        // })
      })

      //3.请求推荐页面的数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      //4.对获取定位进行防抖操作
      this.getThemeTopY = debounce(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44);
          this.themeTopYs.push(Number.MAX_VALUE);
          // console.log(this.themeTopYs);
      }, 100)
    },
    mounted() {},
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  #details {
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
  }
  .details-nav {
    position: relative;
    z-index: 10;
    background-color: white;
  }
  .content {
    height: calc(100% - 44px - 47px);
  }
</style>