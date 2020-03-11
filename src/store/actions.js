import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default {
  addCart(context, payload) {
    return new Promise((reslove, reject) => {
      let oldProduct = context.state.cartlist.find(item => item.iid === payload.iid);

      if(oldProduct) {
       context.commit(ADD_COUNTER, oldProduct)
       reslove('当前的商品数量加1')
      }else {
        context.commit(ADD_TO_CART, payload)
        reslove('成功添加到购物车')
      }
    })
  }
}