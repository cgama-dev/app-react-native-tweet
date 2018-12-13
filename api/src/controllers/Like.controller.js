const TweetMondel = require('./../models/Tweet.model')

const LikeController = () => {
    const controller = {
        like: async (req, res) => {
            const tweetId = req.params.id
            try{

                const tweet = await TweetMondel.findOne({ _id: tweetId })
                
                tweet.set({ likes: tweet.likes + 1 })
                
                await tweet.save()

                req.io.emit('like', tweet)

                return res.json(tweet)
            }catch(err){
                return  res.status(400).send({error: 'Houve algum erro ao buscar tweet'})
            }
        }
    }

    return controller
}

module.exports = LikeController