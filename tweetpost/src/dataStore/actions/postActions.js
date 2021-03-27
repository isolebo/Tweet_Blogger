import { GET_ALL_POSTS,GET_ALL_POSTS_FAILED} from './types/posts';

import PostApi from '../../api/PostApi'




    export const getAllThePosts = () => dispatch => {
        PostApi.getAllPosts()
            .then(res => {
                dispatch({
                    type: GET_ALL_POSTS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_ALL_POSTS_FAILED,
                    payload: err
                })
            })
    }
