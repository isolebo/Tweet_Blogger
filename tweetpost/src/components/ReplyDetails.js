import React,{useEffect} from 'react'
import { getReplyDetails } from '../redux/actions/replyActions'
import { useDispatch, useSelector } from 'react-redux'
import UserList from './UserList'
import { useParams } from "react-router";

const ReplyDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const reply_obj = useSelector(state => state.reply.replyDetails)

    useEffect(() => {
        dispatch(getReplyDetails(id))
    }, [])

    return (
        <div>
            <h2>Reply Details</h2>
            <ul className="list-group">
                <li className="list-group-item active"> reply ID: {reply_obj.id}</li>
                <li className="list-group-item">User Id: {reply_obj.userName}</li>
                <p className="list-group-item">Body: {reply_obj.email}</p>
            </ul>
            <UserList reply_list={id}/>
            
        </div>
    )
}

export default ReplyDetails
