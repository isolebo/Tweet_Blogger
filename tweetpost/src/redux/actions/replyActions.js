import {
    LIST_ALL_REPLIES, LIST_ALL_REPLIES_FAILED,
    LIST_REPLY_DETAILS,LIST_REPLY_DETAILS_FAILURE
    
} from './types/reply';

import ReplyApi from '../../api/ReplyApi'


export const listAllReplies = () => dispatch => {
   
    ReplyApi.listAllReplies()
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

export const listReplyDetails = () => dispatch => {
   
    ReplyApi.listReplyDetails()
        .then(response => {
            dispatch({
                type: LIST_REPLY_DETAILS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: LIST_REPLY_DETAILS_FAILURE,
                payload: error
            })
        })
}

