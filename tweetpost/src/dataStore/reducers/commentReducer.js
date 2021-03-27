import {  GET_ALL_COMMENTS, GET_ALL_COMMENTS_FAILED
} from '../actions/types/comments';

//Create the initial/default state for the commentReducer
const initialState = {
    comment_list: [],
    errorMessage: {},
    get_comments_error : {},
    comment: {},
    get_comment_error: {},
    register_error : {},
    updated_comment: {},
    update_comment_error: {},
    delete_comment_error : {},
    auth_token: ""
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_ALL_COMMENTS:
            return {
                ...state,
                comment_list: action.payload
            };
        case GET_ALL_COMMENTS_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            };
        
        default:
            return state;
        
    }
}
export default commentReducer;