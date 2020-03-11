module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components',
        'views': '@/views'
      }
    },
  },
  // devServer: {
  //   // publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  //   proxyTable: {
  //     '/api': {
  //       target: '',  //目标接口域名
  //       changeOrigin: true,  //是否跨域
  //       pathRewrite: {
  //          '^/api': '/api'   //重写接口
  //       // }
  //       },
  //     }
  //   }
  // }
}