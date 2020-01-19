var express = require('express')
var app = express()
var crypto = require('crypto');

let PORT = process.env.PORT || 8000

app.use(express.urlencoded())

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    console.log(req)
    res.render('index')
})

app.post('/guild/create', (req, res) => {
    let guild_name = req.body.guild
    let guild_id = crypto.randomBytes(16).toString('base64')
    res.redirect(`/guild/${guild_id}`)
})

app.get('/guild/:id', (req, res) => {
    let guild_id = req.params.id

    // Get id from database
    // if ID exists then render page
    // If it does not redirect to error page

    res.render('guild', {"guild_id": guild_id})
})

app.get('/form/:guild/:question', (req, res) => {
  res.render('form', {
    "boss": "Wrathion",
    "question":"Which direction do you run away during Burning Cataclysm?",
    "imageSrc": "https://wow.zamimg.com/uploads/guide/header/9472.jpg?1578087535",
    "imageSolution": "https://i.giphy.com/media/KDJlxljNRtVVgQkiuW/giphy.webp",
    "incorrectStatement": "You would've been enveloped in flames and died a painful death",
    "correctOption": "option4",
    "answer1": "Towards Wrathion's tail",
    "answer2": "Towards a Scorching Blister puddle",
    "answer3": "Away from Wrathion's face",
    "answer4": "Across the platform as far away from Wrathion as possible"})
})

app.get('/form/:guild') // do a redirect to /form/:guild/1

app.get('/form/:guild/results')

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
