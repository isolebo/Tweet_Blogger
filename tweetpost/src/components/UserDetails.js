import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserApi from '../api/UserApi'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {getUserDetails} from '../redux/actions/userActions'

class UserDetails extends Component {
    
    componentWillMount() {
        this.props.getUserDetails()
    }
    render() {

        const userItems = this.props.users.map(user => (
                <div key={user.id}>
                <ul className="list-group">
                  <li className="list-group-item active">Name: {user.firstName}{user.lastName }</li>
                  <li className="list-group-item">Email: {user.email}</li>
                  <li className="list-group-item">Password: {user.password}</li>
                </ul>
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
    userDetails: state.users.userDetails
})
export default connect(mapStateToProps,{getUserDetails})(UserDetails)

