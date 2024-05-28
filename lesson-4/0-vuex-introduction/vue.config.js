const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true), // Eğer Options API kullanıyorsanız
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false), // Üretim için devtools'u devre dışı bırakmak
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false) // Bu bayrağı ekleyin
      })
    ]
  }
});