<template>
  <!-- 原生设置部分滚动的做法:在移动端十分的卡顿 -->
  <div id="category">
    <nav-bar>
      <slot slot="center">商品分类</slot>
    </nav-bar>
    <div class="content">
      <tab-menu :item-list="ItemList" @selectItem="selectItem"/>

      <scroll id='tab-content'  :data="[Categories]">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
          <!-- <tab-control :titles="['综合', '新品', '销量']"
                        @itemClick="tabClick"></tab-control> -->
          <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import TabMenu from './childComponents/TabMenu';
  import TabContentCategory from './childComponents/TabContentCategory';
  import TabContentDetail from './childComponents/TabContentDetail';

  import NavBar from 'components/commom/navbar/NavBar';
  import Scroll from 'components/commom/better-scroll/Scroll';
  // import TabControl from '../../components/commom/tabcontrol/TabControl';

  import {getCategoryList,getSubcategory,getCategoryDetail} from '../../network/category';
  // import {tabControlMixin} from "../../common/mixin";

  export default {
    name:'Category',
    components: {
      TabMenu,
      // TabControl,
      TabContentCategory,
      TabContentDetail,
      Scroll,
      NavBar,
    },
    // mixins: [tabControlMixin],
    data() {
      return {
        ItemList: [],
        Categories: {},
        currentIndex: -1
      }
    },
    computed: {
		  showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.Categories[this.currentIndex].subcategories
      },
      showCategoryDetail() {
		    if (this.currentIndex === -1) return []
		    return this.Categories[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    created() {
      //获取商品列表数据
      this.getCategoryList()
    },
    methods: {
      getCategoryList() {
		    getCategoryList().then(res => {
		      // 1.获取分类数据
		      this.ItemList = res.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.ItemList.length; i++) {
            this.Categories[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求第一个分类的数据
          this.getSubcategories(0)
        })
      },
      getSubcategories(index) {
        this.currentIndex = index;
		    const mailKey = this.ItemList[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.Categories[index].subcategories = res.data
          this.Categories = {...this.Categories}
          this.getCategoryDetail('pop')
          this.getCategoryDetail('sell')
          this.getCategoryDetail('new')
        })
      },
      getCategoryDetail(type) {
		    // 1.获取请求的miniWallkey
        const miniWallkey = this.ItemList[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
		    getCategoryDetail(miniWallkey, type).then(res => {
		      // 3.将获取的数据保存下来
		      this.Categories[this.currentIndex].categoryDetail[type] = res
          this.Categories = {...this.Categories}
        })
      },
      selectItem(index) {      
        this.getCategoryList(index)
      }
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  /* 原始的滚动实现方式 */
  #category{
    height: 100vh;
  }
  #tab-content {
  /* height: calc(100vh - 93px); */
  height: 100%;
  flex: 1;
  overflow: hidden;
  }
  .nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 500px;
  }
  .content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
  }
</style>