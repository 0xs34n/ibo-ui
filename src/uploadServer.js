const express = require('express')
const app = express()

app.post('/', function (req, res) {
  res.send(req);
})

app.listen(3005, function () {
  console.log('Example app listening on port 3005!')
})