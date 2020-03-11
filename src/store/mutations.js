import {
  ADD_COUNTER,
  ADD_TO_CART,
  REDUCE_COUNTER,
} from './mutations-types'

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = false
    state.cartlist.push(payload)
  },
  [REDUCE_COUNTER](state,payload) {
    payload.count--;
    // console.log(payload.count)
    if(payload.count == 0){
      const list = state.cartlist
      list.splice(payload,1)
    }
  },
}