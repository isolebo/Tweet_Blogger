import {
    LIST_ALL_USERS, LIST_ALL_USERS_FAILURE,
    USER_DETAILS, USER_DETAILS_FAILURE
} from '../actions/types/users';

const initialState = {
    userList: [], errMessage: {},
    userDetails : {}, user_details_error: {},
    
    auth_token: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ALL_USERS:
            return {
                ...state,
                userList: action.payload
            };
        case LIST_ALL_USERS_FAILURE:
            return {
                ...state,
                errMessage: action.payload
            };
        case USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload
            };
        case USER_DETAILS_FAILURE:
            return {
                ...state,
                user_details_error: action.payload
            }
        
        
        
        default:
            return state;
        
    }
}
export default userReducer;