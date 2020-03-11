<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton @click.native="checkedClick" 
                   :is-checked="itemInfo.checked"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">¥{{itemInfo.price}}</div>
        <div class="item-count">
          <span @click="decrement">-</span>
          <input class="counter" type="text" v-model="itemInfo.count"> 
          <span @click="increment">+</span>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/commom/checkbutton/CheckButton';

  export default {
    name:'CartListItem',
    components: {
      CheckButton,
    },
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkedClick() {
        this.itemInfo.checked = !this.itemInfo.checked;
      },
      increment() {
        this.$store.commit('add_counter', this.itemInfo)
      },
      decrement() {
        this.$store.commit('reduce_counter', this.itemInfo)
      }
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
    #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    display: flex;
  }

  .info-bottom .item-price {
    color: orangered;
  }
  .item-count {
    position:absolute;
    right: 10px;
  }
  .counter {
    width: 15px;
    text-align: center;
    margin: 0 5px;
  }
</style>