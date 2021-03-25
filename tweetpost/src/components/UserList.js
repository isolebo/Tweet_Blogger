import React, { useState, useEffect } from 'react'
import UserApi from '../api/UserApi'
import { Link } from 'react-router-dom'



const UserList = () => {
    const [user_list, setUserList] = useState([])

    const getAllUser = () => {

        UserApi.getAllUser()
            .then(response => {
                //Set our component's `post_list` array to the results of the API call
                // which would be 'response.data' object
                setUserList(response.data) 
                console.log(response)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    useEffect(() => {
        getAllUser()
    }, [])

    return (
        <div>
            <h4> List of Users</h4>
            { user_list && user_list.map(user => (
                <p key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        {user.firstName}
                    </Link>
                        
                
                </p>
            ))}
            
        </div>
    )
}

export default UserList
