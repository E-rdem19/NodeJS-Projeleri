const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();
const router = new Router();


router
  .get('/', (ctx) => {
    ctx.status = 200;
    ctx.body = '<h1>Index sayfasına hoş geldiniz.</h1>';
  })
  .get('/hakkimda', (ctx) => {
    ctx.status = 200;
    ctx.body = '<h1>Hakkımda sayfasına hoş geldiniz.</h1>';
  })
  .get('/iletisim', (ctx) => {
    ctx.status = 200;
    ctx.body = '<h1>İletişim sayfasına hoş geldiniz.</h1>';
  });


app
  .use(router.routes())
  .use(router.allowedMethods());


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} üzerinde çalışıyor`);
});
