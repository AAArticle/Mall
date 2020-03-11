<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <check-button  
            class="check-button" 
            :is-checked="isSelectAll"
            @click.native="checkClick"/>
      <span>全选</span>
    </div>

    <div class="bottom-center">
      合计:{{totalPrice}}
    </div>

    <div class="bottom-right" @click="calcClick">
      去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/commom/checkbutton/CheckButton'
  export default {
    name:'CartBottomBar',
    components: {
      CheckButton,
    },
    computed: {
      totalPrice() {
        if( this.$store.state.cartlist.length >= 1) {
          return '￥' + this.$store.state.cartlist.filter(item => {
            return item.checked
          }).reduce((preValue, item) => {
            return preValue + item.price * item.count
          }, 0)
        }else {
          return 0
        }
      },
      checkLength() {
        if( this.$store.state.cartlist.length >= 1) {
          return this.$store.state.cartlist.filter(item => item.checked).length
        }else {
          return null
        }
      },
      isSelectAll() {
        // return !(this.$store.state.cartlist.filter(item => !item.checked).length)
        if( this.$store.state.cartlist.length >= 1) {
          return !this.$store.state.cartlist.find(item => !item.checked)
        }else {
          return false
        }
      }
    },
    methods: {
      checkClick() {
        if(this.isSelectAll) {  //全部选中的情况
          this.$store.state.cartlist.forEach(element => element.checked = false)
        }else { //部分或全部不选中的情况
          this.$store.state.cartlist.forEach(element => element.checked = true)
        }
      },
      calcClick() {
        if(!this.isSelectAll) {
          this.$toast.show('请选择需要购买的商品')          
        }else {
          this.$toast.show('请前往付款')     
        }
      }
    },
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .bottom-bar {
    height: 40px;
    position: relative;
    line-height: 40px;
    background-color: #eee;
    display: flex;
  }
  .bottom-left {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .check-button {
    height: 18px;
    width: 18px;
    line-height: 18px;
    margin-right: 5px;
  }
  .bottom-center {
    margin-left:15%;
  }
  .bottom-right {
    position: absolute;
    right: 0;
    width: 120px;
    background-color: var(--color-tint);
    text-align: center;
  }
</style>