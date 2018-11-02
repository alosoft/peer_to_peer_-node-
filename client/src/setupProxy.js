// setup custom proxy

const proxy = require('http-proxy-middleware');

module.exports = function (router) {
  router.use(proxy('/auth/google', {target: "http://localhost:4000/"}))
  router.use(proxy('/api/*', {target: "http://localhost:4000/"}))
};