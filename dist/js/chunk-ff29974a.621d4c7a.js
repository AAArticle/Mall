(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff29974a"],{"02c4":function(t,e,s){"use strict";var i=s("d197"),a=s.n(i);a.a},1253:function(t,e,s){},"13ff":function(t,e,s){"use strict";var i=s("ccb2"),a=s.n(i);a.a},"159b":function(t,e,s){var i=s("da84"),a=s("fdbc"),n=s("17c2"),o=s("9112");for(var r in a){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==n)try{o(l,"forEach",n)}catch(f){l.forEach=n}}},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,a=s("a640"),n=s("ae40"),o=a("forEach"),r=n("forEach");t.exports=o&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"252a":function(t,e,s){},"299f":function(t,e,s){"use strict";var i=s("ab1f"),a=s.n(i);a.a},"2a34":function(t,e,s){"use strict";var i=s("df50"),a=s.n(i);a.a},"3ba4":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"details"}},[s("details-nav-bar",{ref:"nav",staticClass:"details-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("details-swiper",{attrs:{"top-images":t.topImages}}),s("details-base-info",{attrs:{goods:t.goods}}),s("details-shop-info",{attrs:{shopinfo:t.shopinfo}}),s("details-shows",{attrs:{detailinfo:t.detailinfo},on:{imageLoad:t.imageLoad}}),s("details-param-info",{ref:"params",attrs:{"param-info":t.paramInfo}}),s("details-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),s("goods-list",{ref:"recommend",attrs:{goods:t.recommends}})],1),s("details-bottom-bar",{on:{addToCart:t.addToCart}})],1)},a=[],n=(s("a9e3"),s("5530")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"DetailsNavBar"}},[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s("7a74"),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{key:s,staticClass:"title-item",class:{active:s===t.currentIndex},on:{click:function(e){return t.titleClick(s)}}},[t._v(" "+t._s(e)+" ")])})),0)])],1)},r=[],c=s("a2e7"),l={name:"DetailsNavBar",components:{NavBar:c["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick:function(){this.$router.back(-1)}}},f=l,d=(s("299f"),s("2877")),u=Object(d["a"])(f,o,r,!1,null,"1ca47882",null),m=u.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"details-swiper"}},[s("swiper",{staticClass:"image-swiper"},t._l(t.topImages,(function(t,e){return s("swiper-item",{key:e},[s("img",{attrs:{src:t,alt:""}})])})),1)],1)},p=[],v=s("46c0"),b=s("a877"),g={name:"DetailsSwiper",components:{Swiper:v["a"],SwiperItem:b["a"]},props:{topImages:{type:Array,default:function(){return[]}}}},_=g,C=(s("c914"),Object(d["a"])(_,h,p,!1,null,"e4d1b502",null)),y=C.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{attrs:{id:"details-base-info"}},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.nowPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount",style:{backgroundColor:t.goods.discountcolor}},[t._v(" "+t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-others"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},O=[],w={name:"DetailsBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},k=w,j=(s("7464"),Object(d["a"])(k,I,O,!1,null,"c824222c",null)),D=j.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"details-shop-info"}},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shopinfo.logo,alt:""}}),s("span",{staticClass:"title"},[t._v(t._s(t.shopinfo.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(" "+t._s(t.shopinfo.sells)+" ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shopinfo.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shopinfo.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],x={name:"DetailsShopInfo",props:{shopinfo:{type:Object,default:function(){return{}}}}},E=x,P=(s("7d51"),Object(d["a"])(E,T,$,!1,null,"5c47d0a8",null)),S=P.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailinfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailinfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailinfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailinfo.detailImage[0].list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imageLoad}})})),0)]):t._e()},Y=[],L={name:"DetailsShows",props:{detailinfo:{type:Object,default:function(){return{}}}},data:function(){return{counter:0,imagesLength:0}},methods:{imageLoad:function(){++this.counter===this.imagesLength&&this.$emit("imageLoad")}},watch:{detailinfo:function(){this.imagesLength=this.detailinfo.detailImage[0].list.length}}},N=L,A=(s("2a34"),Object(d["a"])(N,B,Y,!1,null,"fdc13da4",null)),z=A.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",{key:i},[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},F=[],G={name:"DetailsParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},J=G,R=(s("02c4"),Object(d["a"])(J,M,F,!1,null,"e4714190",null)),U=R.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t}})})),0)])]):t._e()},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"})])])}],q=s("b7cf"),H={name:"DetailsCommentInfo",props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(q["b"])(e,"yyyy-MM-dd hh:mm:ss")}}},K=H,Q=(s("9988"),Object(d["a"])(K,V,X,!1,null,"22ed4d2e",null)),W=Q.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[s("div",{staticClass:"bar-item"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],et={name:"DetailsBottomBar",methods:{addToCart:function(){this.$emit("addToCart")}}},st=et,it=(s("9d5f"),Object(d["a"])(st,Z,tt,!1,null,"1cdd791a",null)),at=it.exports,nt=s("9f9b"),ot=s("6d71");s("b0c0");function rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ct=s("1ae0");function lt(t){return Object(ct["a"])({url:"/detail",params:{iid:t}})}function ft(){return Object(ct["a"])({url:"/recommend"})}var dt=function t(e,s,i){rt(this,t),this.title=e.title,this.desc=e.desc,this.oldPrice=e.oldPrice,this.nowPrice=e.highNowPrice,this.discount=e.discountDesc,this.discountcolor=e.discountBgColor,this.columns=s,this.services=i},ut=function t(e){rt(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},mt=function t(e,s){rt(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},ht=s("eecb"),pt=s("2f62"),vt={name:"Details",data:function(){return{iid:null,topImages:[],goods:{},shopinfo:{},detailinfo:{},paramInfo:{},commentInfo:{},recommends:[],themeTopYs:[],getThemeTopY:null,currentIndex:0}},components:{DetailsNavBar:m,DetailsSwiper:y,DetailsBaseInfo:D,DetailsShopInfo:S,DetailsShows:z,DetailsParamInfo:U,DetailsCommentInfo:W,DetailsBottomBar:at,Scroll:nt["a"],GoodsList:ot["a"]},methods:Object(n["a"])({},Object(pt["b"])(["addCart"]),{imageLoad:function(){this.$refs.scroll.refresh(),this.getThemeTopY()},titleClick:function(t){this.$refs.scroll.scrollTo(0,-this.themeTopYs[t],100)},contentScroll:function(t){for(var e=-t.y,s=this.themeTopYs.length,i=0;i<s;i++)this.currentIndex!==i&&e>=this.themeTopYs[i]&&e<this.themeTopYs[i+1]&&(this.currentIndex=i,this.$refs.nav.currentIndex=this.currentIndex)},addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.nowPrice,e.iid=this.iid,e.count=1,this.addCart(e).then((function(e){t.$toast.show(e,2e3)}))}}),mixins:[ht["a"]],created:function(){var t=this;this.iid=this.$route.params.iid,lt(this.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new dt(s.itemInfo,s.columns,s.shopInfo.services),t.shopinfo=new ut(s.shopInfo),t.detailinfo=s.detailInfo,t.paramInfo=new mt(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),ft().then((function(e){t.recommends=e.data.list})),this.getThemeTopY=Object(q["a"])((function(){t.themeTopYs=[],t.themeTopYs.push(0),t.themeTopYs.push(t.$refs.params.$el.offsetTop-44),t.themeTopYs.push(t.$refs.comment.$el.offsetTop-44),t.themeTopYs.push(t.$refs.recommend.$el.offsetTop-44),t.themeTopYs.push(Number.MAX_VALUE)}),100)},mounted:function(){}},bt=vt,gt=(s("13ff"),Object(d["a"])(bt,i,a,!1,null,"72fd3b22",null));e["default"]=gt.exports},4160:function(t,e,s){"use strict";var i=s("23e7"),a=s("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4de4":function(t,e,s){"use strict";var i=s("23e7"),a=s("b727").filter,n=s("1dde"),o=s("ae40"),r=n("filter"),c=o("filter");i({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b");var i=s("ade3");function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"5e39":function(t,e,s){},7464:function(t,e,s){"use strict";var i=s("5e39"),a=s.n(i);a.a},"77c3":function(t,e,s){},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"7d51":function(t,e,s){"use strict";var i=s("252a"),a=s.n(i);a.a},9988:function(t,e,s){"use strict";var i=s("ebbb"),a=s.n(i);a.a},"9d5f":function(t,e,s){"use strict";var i=s("1253"),a=s.n(i);a.a},ab1f:function(t,e,s){},b0c0:function(t,e,s){var i=s("83ab"),a=s("9bf2").f,n=Function.prototype,o=n.toString,r=/^\s*function ([^ (]*)/,c="name";!i||c in n||a(n,c,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},b64b:function(t,e,s){var i=s("23e7"),a=s("7b0b"),n=s("df75"),o=s("d039"),r=o((function(){n(1)}));i({target:"Object",stat:!0,forced:r},{keys:function(t){return n(a(t))}})},c914:function(t,e,s){"use strict";var i=s("77c3"),a=s.n(i);a.a},ccb2:function(t,e,s){},d197:function(t,e,s){},dbb4:function(t,e,s){var i=s("23e7"),a=s("83ab"),n=s("56ef"),o=s("fc6a"),r=s("06cf"),c=s("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,s,i=o(t),a=r.f,l=n(i),f={},d=0;while(l.length>d)s=a(i,e=l[d++]),void 0!==s&&c(f,e,s);return f}})},df50:function(t,e,s){},e439:function(t,e,s){var i=s("23e7"),a=s("d039"),n=s("fc6a"),o=s("06cf").f,r=s("83ab"),c=a((function(){o(1)})),l=!r||c;i({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return o(n(t),e)}})},ebbb:function(t,e,s){}}]);
//# sourceMappingURL=chunk-ff29974a.621d4c7a.js.map