import React, { useState, useEffect, Component } from 'react'
import PropTypes from 'prop-types'
import PostApi from '../api/PostApi'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {getAllThePosts} from '../dataStore/actions/postActions'

class PostList extends Component {
    
    componentWillMount() {
        this.props.getAllThePosts()
    }
    render() {

        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.body}</h3>
            </div>
            ))
        return (
            <div>
                <h1>posts</h1>
                {postItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.post_list
})
export default connect(mapStateToProps,{getAllThePosts})(PostList)
