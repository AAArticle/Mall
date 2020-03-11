import {request} from './book'

export function getBookdata() {
  return request({
    url:'apis.juhe.cn/goodbook/query?key=4a6e4e7e68642dcb9dbdde66582188df&catalog_id=1&rn=10',
    }
  )
}