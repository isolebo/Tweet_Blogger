import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { listAllTheTweets } from '../redux/actions/tweetActions'
import { useSelector,useDispatch } from 'react-redux'

const TweetList = () => {
    //use to dispatch an action
    const dispatch = useDispatch()
    //tweets from root reducer, tweetList from tweetReducer
    const tweets = useSelector(state => state.tweets.tweetList)
    
    useEffect(() => {
        //dispatches getAllThetweet() function
       dispatch(listAllTheTweets())
    }, [])

    return (
        <div>
            <h1>List of tweets</h1>
            {tweets.map(tweet => {
                return <p key={tweet.id}>
                    <Link to={`/details/${tweet.id}`}>
                        {tweet.body}
                    </Link>  
                </p>
            })}
        </div>
        )
}

    export  default TweetList

    