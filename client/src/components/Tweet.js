import React from 'react'

import './Tweet.css'

import like from './../like.svg'

import { likes } from './../api'

const Tweet = ({ tweet, handleLike }) =>
  (
    <li className="tweet">
      <strong>{tweet.author}</strong>
      <p>{tweet.content}</p>
      <button type="button" onClick={() => handleLike(tweet._id)}>
        <img src={like} alt="Like" />
        {tweet.likes}
      </button>
    </li>
  )

export default Tweet