const Koa = require('koa');

const Router = require('koa-router');

const cors = require('koa-cors');

const serve = require('koa-static');

const path = require('path');

const axios = require("axios");

require('dotenv').config();

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 4001;
router.get('/news/:category?', async ctx => {
  const {
    category
  } = ctx.params;
  const query = !category || category === 'all' ? '' : `&category=${category}`;
  const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.NEWS_API_KEY}`;
  const {
    data
  } = await axios.get(url);
  ctx.body = data;
});
const buildDirectory = path.resolve(__dirname, './build');
app.use(serve(buildDirectory));
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});