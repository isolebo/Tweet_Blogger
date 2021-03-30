import {
    LIST_ALL_USERS, LIST_ALL_USERS_FAILURE,
    USER_DETAILS, USER_DETAILS_FAILURE,
    USER_REGISTRATION, USER_REGISTRATION_FAILURE,
    USER_LOGIN, USER_LOGIN_FAILURE
} from './types/users';

import UserApi from '../../api/UserApi'


export const getAllTheUsers = () => dispatch => {
   
    UserApi.getAllUsers()
        .then(response => {
            console.log(response)
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

export const getUserDetails = () => dispatch => {
   
    UserApi.getUser()
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


export const registerUser = () => dispatch => {
   
    UserApi.newUser()
        .then(response => {
            dispatch({
                type: USER_REGISTRATION,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: USER_REGISTRATION_FAILURE,
                payload: error
            })
        })
}

export const loginUser = () => dispatch => {
   
    UserApi.getUser()
        .then(response => {
            dispatch({
                type: USER_LOGIN,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: USER_LOGIN_FAILURE,
                payload: error
            })
        })
}





