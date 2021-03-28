import {
    GET_ALL_COMMENTS, GET_ALL_COMMENTS_FAILED,
    LIST_COMMENT_DETAILS, LIST_COMMENT_DETAILS_FAILURE,
    
} from '../actions/types/comments';

//Create the initial/default state for the commentReducer
const initialState = {
    comment_list: [],errorMessage: {},
    commentDetails: {},errorMessage: {}
    
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
        case LIST_COMMENT_DETAILS:
            return {
                ...state,
                commentDetails: action.payload
            };
        case LIST_COMMENT_DETAILS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        
        
        default:
            return state;
        
    }
}
export default commentReducer;