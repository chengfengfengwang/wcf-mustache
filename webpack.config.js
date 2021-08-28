const path = require('path');
module.exports = {
  // 模式,开发
  mode: 'development',
  //入口
  entry: '/src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "www"),
    compress: false,
    port: 8080,
    hot: true
    //虚拟打包的路径,bund1e.js文件没有真正的生成
    // publicPath: "/xuni/"
  }

}
