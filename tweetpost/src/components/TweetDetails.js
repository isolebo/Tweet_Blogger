import React,{useEffect} from 'react'
import { getTweetDetails } from '../redux/actions/tweetActions'
import { useDispatch, useSelector } from 'react-redux'
import ReplyList from './ReplyList'
import { useParams } from "react-router";


const TweetDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const tweet_obj = useSelector(state => state.tweets.tweetDetails)

    useEffect(() => {
        //dispatches getAllTheUser() function
        dispatch(getTweetDetails(id))
    }, [])

    return (
        <div>
            <h2>Tweet Details</h2>
            <ul className="list-group">
                <li className="list-group-item active"> tweet ID: {tweet_obj.id}</li>
                <li className="list-group-item">User Id: {tweet_obj.userId}</li>
                <p className="list-group-item">Body: {tweet_obj.body}</p>
            </ul>
            <ReplyList tweet_Id={tweet_obj.id}/>
            
       
        </div>
    )
}

export default TweetDetails
