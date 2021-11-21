module.exports = {
  proxyList: {
      '/test-api': {
        target: 'https://xxxxxx', // 测试环境URL
        changeOrigin: true,
        secure: false
      },
      '/api': {
        target: 'https://xxxxxx/',
        changeOrigin: true,
        // secure: false,
      }
  }
}
