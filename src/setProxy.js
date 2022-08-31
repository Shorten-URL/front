const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/ip", {
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};
