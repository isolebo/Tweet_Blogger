import React, { useState, useEffect, Component } from 'react'
import PropTypes from 'prop-types'
import UserApi from '../api/UserApi'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {getAllUsers} from '../dataStore/actions/userActions'

class UserList extends Component {
    
    componentWillMount() {
        this.props.getAllUsers()
    }
    render() {

        const userItems = this.props.users.map(user => (
            <div key={user.id}>
                <h3>{user.firstName}{user.lastName }</h3>
            </div>
            ))
        return (
            <div>
                <h1>Users</h1>
                {userItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.user_list
})
export default connect(mapStateToProps,{getAllUsers})(UserList)
