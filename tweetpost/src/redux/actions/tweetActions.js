import {
    LIST_ALL_TWEETS, LIST_ALL_TWEETS_FAILURE,
    ADD_THE_TWEET, ADD_THE_TWEET_FAILURE,
    GET_TWEET_DETAILS,GET_TWEET_DETAILS_FAILURE
} from './types/tweets';

import TweetApi from '../../api/TweetApi'

    export const listAllTheTweets = () => dispatch => {
        TweetApi.listAllTweets()
            .then(response => {dispatch ({
                    type: LIST_ALL_TWEETS,
                    payload: response.data
                })
            })
            .catch(error =>  {dispatch ({
                    type: LIST_ALL_TWEETS_FAILURE,
                    payload: error
                })
            })
    }

    export const addTweet = (tweetData) => dispatch => {
        TweetApi.newTweet(tweetData)
            .then(response => {dispatch ({
                    type: ADD_THE_TWEET,
                    payload: response.data
                })
            })
            .catch(error =>  {dispatch ({
                    type: ADD_THE_TWEET_FAILURE,
                    payload: error
                })
            })
    }

    export const getTweetDetails = (tweet_id) => dispatch => {
        TweetApi.getTweet(tweet_id)
            .then(response => {dispatch ({
                    type: GET_TWEET_DETAILS,
                    payload: response.data
                })
            })
            .catch(error =>  {dispatch ({
                    type: GET_TWEET_DETAILS_FAILURE,
                    payload: error
                })
            })
    }