const Koa = require('koa');
const Router = require('koa-router');
const axios = require("axios");
require('dotenv').config();

const app = new Koa();
const router = new Router();

router.get('/news/:category?', async ctx => {
  const { category } = ctx.params;
  const query = !category || category === 'all' ? '' : `&category=${category}`;
  const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.NEWS_API_KEY}`);
  ctx.body = data;
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
