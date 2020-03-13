<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <slot slot="center">我的档案</slot>
    </nav-bar>
    <div class="profile-top">
      <div class="t-top">
        <div class="profile-top-left">
          <img src="~assets/img/profile/user.svg" alt="">
        </div>
        <div class="profile-top-center">
          <span>登录/注册</span><br>
          <img src="~assets/img/profile/phone.svg" alt="">
          <div class="text">暂无绑定手机号</div>
        </div>
      </div>
      <div class="t-bottom">
        <div class="bottom-left"><span class="active">0.00</span>
        <span>元</span><br>
        我的余额
        </div>
        <div class="bottom-center"><span class="active">0</span>
        <span>个</span><br>
        我的优惠
        </div>
        <div class="bottom-right"><span class="active">0</span>
        <span>分</span><br>
        我的积分
        </div>
      </div>
    </div>

    <div class="profile-middle">
      <div class="m-top">
        <img src="~assets/img/profile/info.svg" alt="">
        <div class="m-text">我的消息</div>
      </div>
      <div class="m-middle">
        <img src="~assets/img/profile/mall.svg" alt="">
        <div class="m-text">积分商城</div>
      </div>
      <div class="m-bottom">
        <img src="~assets/img/profile/card.svg" alt="">
        <div class="m-text">会员卡</div>
      </div>
    </div>

    <div class="profile-bottom">
      <div class="b-top">
        <img src="~assets/img/profile/cart.svg" alt="">
        <div class="m-text">我的购物车</div>
      </div>
      <div class="b-bottom">
        <img src="~assets/img/profile/download.svg" alt="">
        <div class="m-text">下载购物APP</div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/commom/navbar/NavBar';

  export default {
    name:'Profile',
    components: {
      NavBar,
    }
  }
</script>

<style scoped>
  /* @import url(); 引入css类 */
  /* 写css样式 */
  .profile {
    background-color: #F1F1F0;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
    font-weight: 500px;
  }
  .profile-top {
    height: 200px;
    background-color:white;
  }
  .t-top {
    background-color: var(--color-tint);
    height: 100px;
  }
  .profile-top-left {
    float: left;
  }
  .profile-top-left img{
    width: 70px;
    height: 70px;
    margin: 10px 20px;
  }
  .profile-top-center {
    height: 100px;
    font-size: 19px;
    color: white;
    padding-top: 18px;
    flex: 1;
  }
  .text {
    font-size: 15px;
    margin-left: 5px;
    margin-top: 10px;
  }
  .profile-top-center img {
    margin-top: 10px;
    float: left;
    width: 20px;
    height: 20px;
  }
  .t-bottom {
    display: flex;
    text-align: center;
    height: 100px;
    align-items: center;
  }
  .t-bottom div {
    flex: 1;
  }
  .active {
    color: red;
    font-size: 25px;
  }
  .profile-middle {
    margin: 15px 0;
    background-color:white;
    border-radius: 5px;
  }
  .profile-middle div {
    height: 40px;
  }
  .m-top,.m-middle,.m-bottom {
    border-bottom: solid .5px #E7EAED;
  }
  .profile-middle div img{
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 5px;
    float: left;
  }
  .m-text{
    padding: 10px;
    font-size: 15px;
  }
  .profile-bottom {
    background-color:white;
    border-radius: 5px;
  }
  .profile-bottom div img{
    margin-left: 10px;
    float: left;
  }
  .b-top img {
    width:32px;
    height: 32px;
  }
</style>