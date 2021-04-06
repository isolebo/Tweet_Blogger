import React,{useEffect} from 'react'
import { listTweetDetails } from '../redux/actions/tweetActions'
import { useDispatch, useSelector } from 'react-redux'
import ReplyList from './ReplyList'
import { useParams } from "react-router";


const TweetDetails = (id) => {
    //const { id } = useParams()
    const dispatch = useDispatch()
    const tweets = useSelector(state => state.tweets.tweetDetails)

    useEffect(() => {
        //dispatches getAllTheUser() function
        dispatch(listTweetDetails(id))
    }, [])

    return (
        <div>
            <h2>Tweet Details</h2>
            <ul className="list-group">s
                <li className="list-group-item active"> tweet ID: {tweets.id}</li>
                <li className="list-group-item">User Id: {tweets.userId}</li>
                <p className="list-group-item">Body: {tweets.body}</p>
            </ul>
            <ReplyList tweet_Id={id}/>
            
       
        </div>
    )
}

export default TweetDetails
