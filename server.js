const express = require('express')
const next = require('next')

const compression = require('compression')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

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
    server.get('/Blog/:id', (req, res) => {
      const actualPage = '/Blog'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })
    //后台二级页面
    server.get('/AdminDetail/:id', (req, res) => {
      const actualPage = '/AdminDetail'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(4322, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost 4322')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
