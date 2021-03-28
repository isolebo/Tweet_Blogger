import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TweetApi from '../api/TweetApi'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {listAllTheTweets} from '../redux/actions/tweetActions'

class TweetList extends Component {
    
    componentDidMount() {
        this.props.listAllTheTweets()
    }
    render() {

        const tweetItems = this.props.tweetList.map(tweet => (
            <div key={tweet.id}>
                <p>{tweet.body}</p>
            </div>
            ))
        return (
            <div>
                <h1>Tweets</h1>
                {tweetItems}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tweets: state.tweets.tweetList
})
export default connect(mapStateToProps,{listAllTheTweets})(TweetList)
