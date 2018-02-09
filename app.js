const Koa = require('koa')

new Koa()
.use((ctx) => {
  ctx.body = "Hello"
})
.listen(3000)
