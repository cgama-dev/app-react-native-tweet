const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const TweetRoute = require('./routes/Tweet.route')

const app = express()

const server = require('http').Server(app)

const io = require('socket.io')(server)

const { middleareSocketIo } = require('./middleware/sockeio')(io)

app.use(middleareSocketIo)

app.use(cors())

app.use(express.json())

app.use('/tweets', TweetRoute)


mongoose.connect('mongodb://twitterdb:twitter123@ds121814.mlab.com:21814/db-twitter', {
    useNewUrlParser: true
})

mongoose.global = mongoose.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Erro ao conectar com o banco'))

db.once('open', () => {
    console.log('Conexão com o banco realizada')
})

server.listen(3010, () => console.log('Servidor rodando port 3010'))
