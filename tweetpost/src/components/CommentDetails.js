import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentApi from '../api/CommentApi'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {getCommentDetails} from '../redux/actions/commentActions'

class CommentDetails extends Component {
    
    componentWillMount() {
        this.props.getCommentDetails()
    }
    render() {

        const commentItems = this.props.comments.map(comment => (
                <div key={comment.id}>
                <ul className="list-group">
                  <li className="list-group-item active">User Id: {comment.userId}</li>
                  <li className="list-group-item">Tweet Id: {comment.body}</li>
                  <li className="list-group-item">Body: {comment.body}</li>
                </ul>
            </div>
            ))
        return (
            <div>
                <h1>comments</h1>
                {commentItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    commentDetails: state.comments.commentDetails
})
export default connect(mapStateToProps,{getCommentDetails})(CommentDetails)

