import React, { useEffect } from 'react'
import { getUserDetails } from '../redux/actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router";


const UserDetails = (user) => {
    const { id } = useParams()//passes an id to the get the id of the post

    //use to dispatch an action
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.userDetails)
    
    
    useEffect(() => {
        //dispatches getAllTheUser() function
       dispatch(getUserDetails(id))
    }, [])

    return (
        <div>
            <h1>Details of Users</h1>
            <ul className="list-group">
                <li className="list-group-item active"> Post ID: {user.id}</li>
                <li className="list-group-item">User Id: {user.firstName}</li>
                <li className="list-group-item">Title: {user.lastName}</li>
                <p className="list-group-item">Body: {user.email}</p>
            </ul>
        </div>
        )
}

    export  default UserDetails

    