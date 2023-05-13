const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        additionalData: `
          @import "@/assets/styles/scss-variables.scss";
        `
      },
    },
  },
}) 