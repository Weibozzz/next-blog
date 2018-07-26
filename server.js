const express = require('express')
const next = require('next')

const compression = require('compression')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
let port= dev?4324:80
console.log(port)

app.prepare()
  .then(() => {
    const server = express()

    if (!dev) {
      server.use(compression()) //gzip
    }
    //文章二级页面
    server.get('/p/:id', (req, res) => {
      const actualPage = '/detail'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })
    //点击分页二级页面
    server.get('/blog/:id', (req, res) => {
      const actualPage = '/blog'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })
    //后台二级页面
    server.get('/adminDetail/:id', (req, res) => {
      const actualPage = '/adminDetail'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost '+port)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
