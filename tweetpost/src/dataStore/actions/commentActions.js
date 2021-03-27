// Import all action types for the Comment
import {   GET_ALL_COMMENTS, GET_ALL_COMMENTS_FAILED} from './types/comments';

import CommentApi from '../../api/CommentApi'

//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks

export const getAllTheComments = () => dispatch => {
   
    //Handles GET_ALL_CommentS and GET_ALL_CommentS_FAILED action types 
    CommentApi.getAllComments()
        .then(res => {
            dispatch({
                type: GET_ALL_COMMENTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_COMMENTS_FAILED,
                payload: err
            })
        })
}

