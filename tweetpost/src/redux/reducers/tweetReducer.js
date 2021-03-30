import {
    LIST_ALL_TWEETS, LIST_ALL_TWEETS_FAILURE,
    ADD_THE_TWEET,ADD_THE_TWEET_FAILURE
} from '../actions/types/tweets';

//Create the initial/default state for the tweetReducer
const initialState = {
    tweetList: [], errorMessage_tweet: {},
    addTweet:{},errorMessage_add:{},
    
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
        
        
        default:
            return state;
        
    }
}
export default tweetReducer;