import React, { useState, useEffect } from 'react'
import CommentApi from '../api/CommentApi'
import { Link } from 'react-router-dom'



const CommentList = () => {
    const [comment_list, setCommentList] = useState([])

    const getAllComment = () => {

        CommentApi.getAllComment()
            .then(response => {
                //Set our component's `post_list` array to the results of the API call
                // which would be 'response.data' object
                setCommentList(response.data) 
                console.log(response)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    useEffect(() => {
        getAllComment()
    }, [])

    return (
        <div>
            <h4> List of Comments</h4>
            { comment_list && comment_list.map(comment => (
                <p key={comment.id}>
                    <Link to={`/comments/${comment.id}`}>
                        {comment.body}
                    </Link>
                        
                
                </p>
            ))}
            
        </div>
    )
}

export default CommentList
