import {
    LIST_ALL_USERS, LIST_ALL_USERS_FAILURE,
    USER_DETAILS,USER_DETAILS_FAILURE
} from './types/users';

import UserApi from '../../api/UserApi'


export const getAllUsers = () => dispatch => {
   
    UserApi.getAllUsers()
        .then(response => {
            dispatch({
                type: LIST_ALL_USERS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: LIST_ALL_USERS_FAILURE,
                payload: error
            })
        })
}

export const getUserDetails = (userId) => dispatch => {
   
    UserApi.getUser(userId)
        .then(response => {
            dispatch({
                type: USER_DETAILS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: USER_DETAILS_FAILURE,
                payload: error
            })
        })
}


