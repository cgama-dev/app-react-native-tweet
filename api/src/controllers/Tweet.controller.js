const TweetModel = require('./../models/Tweet.model')

const TweetController = () => {
    const controller = {
        query: async (req, res) => {
            try {
                
                const tweets = await TweetModel.find({}).sort('-createdAt')

                return res.json(tweets)

            } catch (err) {
                res.status(400).send({ error: 'Erro ao consultar tweets' })
            }

        },
        get: async (req, res) => {
            try {

                const tweetId = req.params.id
                
                const tweet = await TweetModel.findOne({ _id: tweetId })

                if (!tweet)
                    return res.status(400).send({ error: 'Não existe esse tweet na base de dados' })

                return res.json(tweet)

            } catch (err) {
                return res.status(400).send({ error: 'Houve algum erro ao consultar tweet' })
            }
        },
        create: async (req, res) => {
            try {
                
                const tweet = await TweetModel.create(req.body)
                
                req.io.emit('tweet', tweet)
                
                return res.json(tweet)

            } catch (err) {
                return res.status(400).send({ error: 'Houve algum erro ao consultar tweet' })
            }
        }

    }

    return controller
}

module.exports = TweetController