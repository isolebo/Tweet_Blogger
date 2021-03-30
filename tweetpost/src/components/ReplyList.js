import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { listAllTheReplies } from '../redux/actions/replyActions'
import { useSelector,useDispatch } from 'react-redux'

const ReplyList = () => {
    //use to dispatch an action
    const dispatch = useDispatch()
    //users from root reducer, userList from userReducer
    const reply = useSelector(state => state.reply.replyList)
    
    useEffect(() => {
        //dispatches getAllTheUser() function
       dispatch(listAllTheReplies())
    }, [])

    return (
        <div>
            <h1>List of Replies</h1>
            {reply.map(rep => {
                return <p key={rep.id}>
                    <Link to={`/details/${rep.id}`}>
                        {rep.body}
                    </Link>  
                </p>
            })}
        </div>
        )
}

    export  default ReplyList

    