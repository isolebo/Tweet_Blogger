import {
    GET_ALL_COMMENTS, GET_ALL_COMMENTS_FAILED,
    LIST_COMMENT_DETAILS,LIST_COMMENT_DETAILS_FAILURE
    
} from './types/comments';

import CommentApi from '../../api/CommentApi'


export const getAllTheComments = () => dispatch => {
   
    CommentApi.getAllComments()
        .then(response => {
            dispatch({
                type: GET_ALL_COMMENTS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ALL_COMMENTS_FAILED,
                payload: error
            })
            
        })
}

export const getCommentDetails = () => dispatch => {
   
    CommentApi.getComment()
        .then(response => {
            dispatch({
                type: LIST_COMMENT_DETAILS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: LIST_COMMENT_DETAILS_FAILURE,
                payload: error
            })
        })
}

