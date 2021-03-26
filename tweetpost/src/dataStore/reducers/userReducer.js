import {  GET_ALL_USERS, GET_ALL_USERS_FAILED
} from '../actions/types/users';

//Create the initial/default state for the userReducer
const initialState = {
    user_list: [],
    errorMessage: {},
    get_users_error : {},
    user: {},
    get_user_error: {},
    register_error : {},
    updated_user: {},
    update_user_error: {},
    delete_user_error : {},
    auth_token: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_ALL_USERS:
            return {
                ...state,
                user_list: action.payload
            };
        case GET_ALL_USERS_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            };
        
        default:
            return state;
        
    }
}
export default userReducer;