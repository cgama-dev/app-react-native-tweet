import axios from 'axios'

const baseUrl = 'http://localhost:3010'

export const query = async () => {

    const data = await axios.get(baseUrl + "/tweets")

    return data.data
}

export const create = async (tweet) => {

    const data = await axios.post(baseUrl + '/tweets', tweet)

    return data.data
}

export const likes = async (tweetId) => {

    const data = await axios.post(baseUrl + '/tweets/' + tweetId)

    return data.data
}