import {  GET_ALL_POSTS, GET_ALL_POSTS_FAILED, REGISTER_POSTS, REGISTER_POSTS_FAILED
} from '../actions/types/posts';

//Create the initial/default state for the postReducer
const initialState = {
    post_list: [],
    errorMessage: {},
    get_posts_error : {},
    post: {},
    get_post_error: {},
    register_error : {},
    updated_post: {},
    update_post_error: {},
    delete_post_error : {},
    auth_token: ""
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case REGISTER_POSTS:
            return {
                ...state,
                post_list: action.payload
            };
        case REGISTER_POSTS_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            };
        case GET_ALL_POSTS:
            return {
                ...state,
                post_list: action.payload
            };
        case GET_ALL_POSTS_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            };
        
        default:
            return state;
        
    }
}
export default postReducer;