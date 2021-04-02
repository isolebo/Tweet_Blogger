import React from 'react'
import { listTweetDetails } from '../redux/actions/tweetActions'
import {useDispatch, useSelector} from 'react-redux'

const TweetDetails = () => {

    const dispatch = useDispatch()
    const tweets = useSelector(state.users.tweetDetails)

    useEffect(() => {
        //dispatches getAllTheUser() function
        dispatch(listTweetDetails())
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default TweetDetails
