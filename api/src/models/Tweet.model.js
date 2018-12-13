const mongoose = require('mongoose')

const SchemaTweet = new mongoose.Schema({
    author: {
        type: String
    },
    'content': {
        type: String
    },
    'likes': {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const TweetModel = mongoose.model('Tweet', SchemaTweet)

module.exports = TweetModel