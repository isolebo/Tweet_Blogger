import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserApi from '../api/UserApi'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {getAllUsers} from '../redux/actions/userActions'

class UserList extends Component {
    
    componentWillMount() {
        this.props.getAllUsers()
    }
    render() {

        const userItems = this.props.users.map(user => (

            <div key={user.id}>
                <Link to={`/details/${user.id}`}>
                    <p>{user.firstName}{user.lastName}</p>
                </Link>
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

const mapStateToProps = (state) => ({
    users: state.users.userList
})
export default connect(mapStateToProps,{getAllUsers})(UserList)
