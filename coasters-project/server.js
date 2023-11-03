const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')


require('./db/database-connection')

app.get('/', (req, res) => {
    res.render('home-page')
})
app.get('/CoastersGarelly', (req, res) => {
    .find()
        .then(coaster => res.render('coaster-page', { coaster: coaster }))
        .catch(err => console.log('ERROR:', err))
})

app.listen(3000, () => console.log('Server listening on port 3000'))