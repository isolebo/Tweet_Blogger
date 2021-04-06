
import Axios from './BaseApi'

class TweetApi{
    
    static listAllTweets(){
        return Axios.get(`/tweets/`)
    }

    static getTweet(tweet_url){
        return Axios.get(`/tweets/`,tweet_url)
    }

    static newTweet(new_tweet_object){
        return Axios.post(`tweets`,new_tweet_object)
    }


    static patchTweet(tweet_url, tweet_fields){
        return Axios.patch(`/tweets/tweet_url`,tweet_fields)
    }

    static deleteTweet(tweet_url){
        return Axios.delete(`/tweets/tweet_url`)
    }

    
}

export default TweetApi