import {
    LIST_ALL_USERS, LIST_ALL_USERS_FAILURE,
    USER_DETAILS, USER_DETAILS_FAILURE,
    USER_REGISTRATION, USER_REGISTRATION_FAILURE,
    USER_LOGIN, USER_LOGIN_FAILURE,
    DELETE_USER, DELETE_USER_FAILURE,
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

export const getUserDetails = (id) => dispatch => {
    UserApi.getUser(id)
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


export const registerUser = (new_User) => dispatch => {
   
    UserApi.newUser(new_User)
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

export const loginUser = (login_info) => dispatch => {
   
    UserApi.getUser(login_info)
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

export const deleteTheUser = (delete_info) => dispatch => {
   
    UserApi.getUser(delete_info)
        .then(response => {
            dispatch({
                type: DELETE_USER,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: DELETE_USER_FAILURE,
                payload: error
            })
        })
}





