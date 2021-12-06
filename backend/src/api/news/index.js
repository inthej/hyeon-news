const Router = require('koa-router');
const axios = require("axios");
const {CategoryType} = require("../../common/AppTypes");
const router = new Router();

require("dotenv").config({ path: "../../../.env" });

router.get('/:category?', async ctx => {
  const { category } = ctx.params;
  const query = !category || category === CategoryType.all ? '' : `&category=${category}`;
  const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.NEWS_API_KEY}`;
  const { data } = await axios.get(url);
  ctx.body = data;
});

module.exports = router;
