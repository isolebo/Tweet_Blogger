import React, { useEffect } from 'react'
import { getUserDetails } from '../redux/actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router";


const UserDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.userDetails)
    
    useEffect(() => {
        //dispatches getAllTheUser() function
        dispatch(getUserDetails(id))
    }, [])

    return (
        <div>
            <h1>Details of User</h1>
            <ul >
                <li> User ID: {users.id}</li>
                <li >Name: {users.firstName} {users.lastName}</li>
                <li >Email: {users.email}</li>
            </ul>
        </div>
        )
}

    export  default UserDetails

    