var express = require('express')
var app = express()

let PORT = process.env.PORT || 8000

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
