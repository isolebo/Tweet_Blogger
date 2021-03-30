
import Axios from './BaseApi'

class ReplyApi{
    
    static getAllReplies(){
        return Axios.get(`/reply/`)
    }

    static getReply(reply_url){
        return Axios.get(`/reply/`,reply_url)
    }

    static getreplyForTweet(tweet_id){
        return Axios.get(`/reply?tweetId=${tweet_id}`)
    }

    static newReply(new_reply_object){
        return Axios.post(`reply`,new_reply_object)
    }

    static updateReply(reply_url, updated_reply){
        return Axios.put(`/reply/reply_url`,updated_reply)
    }

    static patchReply(reply_url, updated_fields){//updates a part of the Reply API
        return Axios.patch(`/reply/reply_url`,updated_fields)
    }

    static deleteReply(reply_url){//deletes a Reply in the API
        return Axios.delete(`/reply/reply_url`)
    }

    
}

export default ReplyApi