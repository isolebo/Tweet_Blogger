import {
    LIST_ALL_REPLIES, LIST_ALL_REPLIES_FAILED,
    GET_REPLY_DETAILS, GET_REPLY_DETAILS_FAILURE
    
} from './types/reply';

import ReplyApi from '../../api/ReplyApi'


export const listAllTheReplies = () => dispatch => {
   
    ReplyApi.getAllReplies()
        .then(response => {
            dispatch({
                type: LIST_ALL_REPLIES,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: LIST_ALL_REPLIES_FAILED,
                payload: error
            })
            
        })
}

export const getReplyDetails = (reply_id) => dispatch => {
   
    ReplyApi.getReply(reply_id)
        .then(response => {
            dispatch({
                type: GET_REPLY_DETAILS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: GET_REPLY_DETAILS_FAILURE,
                payload: error
            })
        })
}

