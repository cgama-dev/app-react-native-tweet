const express = require('express')

const router = express.Router()

const { query, get, create } = require('./../controllers/Tweet.controller')()

const { like } = require('./../controllers/Like.controller')()

router.get('/', query)

router.get('/:id', get)

router.post('/', create)

router.post('/:id', like)

module.exports = router