import React, { useEffect } from 'react'
import UserApi from '../api/UserApi'
import { Link } from 'react-router-dom'

//import { connect } from 'react-redux'
import { getAllTheUsers } from '../redux/actions/userActions'
import { useSelector,useDispatch } from 'react-redux'


const UserList = () => {
    //use to dispatch an action
    const dispatch = useDispatch()
    //users from root reducer, userList from userReducer
    const users = useSelector(state => state.users.userList)
    
    useEffect(() => {
        //dispatches getAllTheUser() function
       dispatch(getAllTheUsers())
    }, [])
    
    
    return (
        <div>
            <h1>List of Users</h1>
            {users.map(user => {
                return <p key={user.id}>
                    <Link to={`/details/${user.id}`}>
                        {user.firstName}
                    </Link>  
                </p>
            })}
            
        </div>

        )
}
    


    
    export  default UserList

    