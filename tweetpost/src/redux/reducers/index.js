import { combineReducers } from 'redux'
import userReducer from './userReducer'
import tweetReducer from './tweetReducer'
import replyReducer from './replyReducer'
import {reducer as formReducer} from 'redux-form'


export default combineReducers({
    users: userReducer,
    tweets: tweetReducer,
    form: formReducer,
    reply: replyReducer

})