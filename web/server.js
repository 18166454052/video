
const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const resolve = file => path.resolve(__dirname, file)
const app = express()
app.use(favicon(resolve('./favicon.ico')))
app.use('/dist', express.static(resolve('./dist')))

app.use('/', function (req, res) {
  const html = fs.readFileSync(resolve('./dist/' + 'index.html'), 'utf-8')
  res.send(html)
})
console.log("server----start")
app.listen(80);
