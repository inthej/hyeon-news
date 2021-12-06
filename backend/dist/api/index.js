const Router = require('koa-router');

const news = require('./news');

const router = new Router();
router.use('/news', news.routes());
module.exports = router;