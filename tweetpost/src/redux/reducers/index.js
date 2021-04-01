import { combineReducers } from 'redux'
import userReducer from './userReducer'
import tweetReducer from './tweetReducer'
import replyReducer from './replyReducer'


export default combineReducers({
    users: userReducer,
    tweets: tweetReducer,
    reply: replyReducer
})