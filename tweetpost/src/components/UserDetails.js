import React, { useEffect } from 'react'
import { getUserDetails } from '../redux/actions/userActions'
import { useSelector, useDispatch } from 'react-redux'


const UserDetails = () => {
    //use to dispatch an action
    const dispatch = useDispatch()
    //users from root reducer, userDetails from userReducer
    const users = useSelector(state => state.users.userDetails)
    
    useEffect(() => {
        //dispatches getAllTheUser() function
       dispatch(getUserDetails())
    }, [])

    return (
        <div>
            <h1>Details of Users</h1>
            {users.map(user => {
                return <p key={user.id}>
                        {user.firstName}{user.lastName}
                        {user.email}
                   
                </p>
            })}
        </div>
        )
}

    export  default UserDetails

    