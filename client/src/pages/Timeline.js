import React, { Component } from 'react'

import socket from 'socket.io-client'

import './Timeline.css'

import twitterLogo from './../twitter.svg'

import Tweet from './../components/Tweet'

import { query, create, likes } from './../api'

class Timeline extends Component {
  state = {
    newTweet: '',
    tweets: []
  }

  async componentDidMount() {

    this.subscribeToEvents()

    const tweets = await query()

    this.setState({ tweets })
  }

  handleTextArea = (e) => {

    this.setState({
      newTweet: e.target.value
    })
  }

  handleNewTweet = async (e) => {

    if (e.keyCode !== 13) {
      return
    }

    const content = this.state.newTweet
    const author = localStorage.getItem('@GoTwitter:username')

    await create({ content, author })

    this.setState({ newTweet: "" })

  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:3010')

    io.on('tweet', data => {
      const tweets = [data, ...this.state.tweets]
      this.setState({ tweets })
    })

    io.on('like', data => {
      this.setState({
        tweets: this.state.tweets.map(tweet => (
          tweet._id === data._id ? data : tweet
        ))
      })
    })
  }

  handleLike = async (tweetId) => {
    await likes(tweetId)
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleTextArea}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo ?"
          />
        </form>

        <ul className="tweet-list" >
          {
            this.state.tweets.map(tweet => <Tweet key={tweet._id} tweet={tweet} handleLike={this.handleLike} />)
          }
        </ul>

      </div>
    )
  }
}

export default Timeline
