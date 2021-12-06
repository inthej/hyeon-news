const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const serve = require('koa-static');
const path = require('path');
const send = require('koa-send');
require('dotenv').config();

const app = new Koa();
const router = new Router();

// 라우터 모듈화
const api = require('./api');
router.use('/api', api.routes());

// CORS
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

// 정적파일 제공
const buildDirectory = path.resolve(__dirname, './build');
app.use(serve(buildDirectory));
app.use(async ctx => {
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    await send(ctx, 'index.html', { root: buildDirectory });
  }
})

// 서버시작
app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
