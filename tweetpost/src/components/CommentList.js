// Import all action types for the User
import {   GET_ALL_COMMENTS, GET_ALL_COMMENTS_FAILED} from './types/comments';

import CommentApi from '../../api/CommentApi'

//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks

export const getAllTheComments = () => dispatch => {
   
    //Handles GET_ALL_Comments and GET_ALL_Comments_FAILED action types 
    UserApi.getAllComments()
        .then(res => {
            dispatch({
                type: GET_ALL_COMMENTs,
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

const mapStateToProps = state => ({
    users: state.comments.comment_list
})
export default connect(mapStateToProps,{getAllTheComments})(CommentList)


