import React,{useEffect} from 'react'
import { getTweetDetails } from '../redux/actions/tweetActions'
import { useDispatch, useSelector } from 'react-redux'
import ReplyList from './ReplyList'
import { useParams } from "react-router";
import { getUserDetails } from '../redux/actions/userActions';


const TweetDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const tweet_obj = useSelector(state => state.tweets.tweetDetails)
    const user_obj = useSelector(state => state.users.userDetails)

    useEffect(() => {
        
        dispatch(getTweetDetails(id))
        dispatch(getUserDetails(tweet_obj.id))
    }, [])

    return (
        <div>
            <h2>Tweet Details</h2>
            <ul className="list-group">
                <li className="list-group-item">User Id: {tweet_obj.userId}</li>
                <p className="list-group-item">Name: {user_obj.firstName} {user_obj.lastName}</p>
            </ul>
            <ReplyList tweet_Id={tweet_obj.id}/>
        </div>
    )
}

export default TweetDetails
