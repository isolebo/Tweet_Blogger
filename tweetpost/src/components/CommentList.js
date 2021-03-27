import React, { useState, useEffect, Component } from 'react'
import PropTypes from 'prop-types'
import CommentApi from '../api/CommentApi'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {getAllTheComments} from '../dataStore/actions/commentActions'

class CommentList extends Component {
    
    componentWillMount() {
        this.props.getAllTheComments()
    }
    render() {

        const commentItems = this.props.comments.map(comment => (
            <div key={comment.id}>
                <p>{comment.body}</p>
            </div>
            ))
        return (
            <div>
                <h1>Comments</h1>
                {commentItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comments: state.comments.comment_list
})
export default connect(mapStateToProps,{getAllTheComments})(CommentList)
