import {
    LIST_ALL_USERS, LIST_ALL_USERS_FAILURE,
    USER_DETAILS, USER_DETAILS_FAILURE,
    USER_REGISTRATION, USER_REGISTRATION_FAILURE,
    USER_LOGIN, USER_LOGIN_FAILURE
} from '../actions/types/users';

const initialState = {
    userList: [], userList_error: {},
    userDetails: {}, userDetails_error: {},
    userRegistration: {}, userRegistration_error: {},
    userLogin:{}, userLogin_error: {},
    
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
                userList_error: action.payload
            };
        
        case USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload
            };
        
        case USER_DETAILS_FAILURE:
            return {
                ...state,
                userDetails_error: action.payload
            }
        
        case USER_REGISTRATION:
            return {
                ...state,
                userRegistration: action.payload
            };
        
        case USER_REGISTRATION_FAILURE:
            return {
                ...state,
                userRegistration_error: action.payload
            };
        
        case USER_LOGIN:
            return {
                ...state,
                userLogin: action.payload
            };
        
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                userLogin_error: action.payload
            };
        
        
        

        default:
            return state;
        
    }
}
export default userReducer;