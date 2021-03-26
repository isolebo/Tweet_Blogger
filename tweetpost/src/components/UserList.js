import React, { useState, useEffect, Component } from 'react'
import UserApi from '../api/UserApi'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {getAllUsers} from '../dataStore/actions/types/userActions'

const UserList = (props) => {
    
    getAllUsers()//trying to make function call to state

    return (
        <div>
             <h4> List of Users</h4>
            { map(user => (
                <p key={props.user.id}>
                    <Link to={`/users/${props.user.id}`}>
                        {props.user.firstName}
                    </Link>
                </p>
            ))} 
        </div>
    )
}
const mapStateToProps = state => ({
    users: state.users.user_list
})
export default connect(mapStateToProps,{getAllUsers})(UserList)
