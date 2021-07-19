module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://m.maoyan.com/ajax', //对应自己的接口，就是你请求的那个域名,将'/api'替换为'https://m.maoyan.com/ajax'
          changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          ws: true,  // 是否启用websockets
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }