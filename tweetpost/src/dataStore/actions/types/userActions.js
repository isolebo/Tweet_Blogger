// Import all action types for the User
import {   GET_ALL_USERS, GET_ALL_USERS_FAILED} from '../types/users';

import UserApi from '../../../api/UserApi'

//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks

export const getAllUsers = () => dispatch => {
   
    //Handles GET_ALL_USERS and GET_ALL_USERS_FAILED action types 
    UserApi.getAllUsers()
        .then(res => {
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_USERS_FAILED,
                payload: err
            })
        })
}

