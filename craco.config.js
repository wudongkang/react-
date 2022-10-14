const cracoSassResourcesLoader = require('craco-sass-resources-loader')
const path = require('path')

console.log(path);
module.exports = {
  entry:'./src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出到哪个文件夹
    filename: 'output.js' // 输出的文件名
  },
  plugins: [
    {
      plugin: cracoSassResourcesLoader,
      options:{
        resources: path.resolve(__dirname, './src/style/index.scss')
      }
    }
  ],
  webpack:{
    alias:{
      '@': path.join(__dirname, 'src')
    }
  },

}
