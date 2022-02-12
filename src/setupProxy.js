const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/menu',
    createProxyMiddleware({
      target: 'http://localhost:3004',
      changeOrigin: true,
    })
  );
};