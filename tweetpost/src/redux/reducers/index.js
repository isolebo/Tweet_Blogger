import { combineReducers } from 'redux'
import userReducer from './userReducer'
import tweetReducer from './tweetReducer'
import commentReducer from './commentReducer'


export default combineReducers({
    users: userReducer,
    posts: tweetReducer,
    comments: commentReducer

})