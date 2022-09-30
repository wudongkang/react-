const cracoSassResourcesLoader = require('craco-sass-resources-loader')
const path = require('path')


console.log(path);
module.exports = {
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
  }
}
