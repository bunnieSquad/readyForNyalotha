var express = require('express')
var app = express()

let PORT = process.env.PORT || 8000

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/guild/create', (req, res) => {
    console.log(req)
})

app.get('/form/:guild/:question')

app.get('/form/:guild') // do a redirect to /form/:guild/1

app.get('/form/:guild/results')

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
