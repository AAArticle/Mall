import axios from 'axios'

//最终方案;
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000
  })

  //2.axios的拦截器
  //2.1请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    //1.比如config中的信息不符合服务器的要求，多配制headers信息

    //2.比如每次发送网络请求时，都希望在界面显示出一个请求的图标
    
    //3.某些网络请求（比如登录token），必须携带一些特殊的信息
    return config
  }, err => {
    //当发送没有成功的时候才会来到这里的代码块
    console.log(err)
  })

  //2.2响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
    // res.data为向服务器请求出来的数据
    return res.data
  }, err => {
    console.log(err)
  })

  //3.发送真正的网路请求
  return instance(config)
}
