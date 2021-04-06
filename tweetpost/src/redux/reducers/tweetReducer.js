import {
    LIST_ALL_TWEETS, LIST_ALL_TWEETS_FAILURE,
    ADD_THE_TWEET, ADD_THE_TWEET_FAILURE,
    GET_TWEET_DETAILS, GET_TWEET_DETAILS_FAILURE

    
} from '../actions/types/tweets';

//Create the initial/default state for the tweetReducer
const initialState = {
    tweetList: [], errorMessage_tweet: {},
    addTweet: {}, errorMessage_add: {},
    tweetDetails:{}, errorMessage_details:{},
    
    auth_token: ""
}

const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case LIST_ALL_TWEETS:
            return {
                ...state,
                tweetList: action.payload
            };
        case LIST_ALL_TWEETS_FAILURE:
            return {
                ...state,
                errorMessage_tweet: action.payload
            };
        
        case ADD_THE_TWEET:
            return {
                ...state,
                addTweet: action.payload
            };
        case ADD_THE_TWEET_FAILURE:
            return {
                ...state,
                errorMessage_add: action.payload
            };
        
        case GET_TWEET_DETAILS:
            return {
                ...state,
                tweetDetails: action.payload
            };
        
        case GET_TWEET_DETAILS_FAILURE:
            return {
                ...state,
                errorMessage_details: action.payload
            }
        
        default:
            return state;
        
    }
}
export default tweetReducer;