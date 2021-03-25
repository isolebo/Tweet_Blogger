
import Axios from './BaseApi'

class PostApi{
    
    static getAllPosts(){//gets all the Posts from the API
        return Axios.get(`/Posts/`)
    }

    static getPost(Post_url){
        return Axios.get(`/Posts/`,Post_url)
    }

    static getPostsForPost(post_id){
        return Axios.get(`/Posts?postId=${post_id}`)
    }

    static newPost(new_Post_object){
        return Axios.post(`Posts`,new_Post_object)
    }

    static Post(Post_url, Postd_Post){
        return Axios.put(`/Post/Post_url`,Postd_Post)
    }

    static patchPost(Post_url, Postd_fields){//Posts a part of the Post API
        return Axios.patch(`/Posts/Post_url`,Postd_fields)
    }

    static deletePost(Post_url){//deletes a Post in the API
        return Axios.delete(`/Posts/Post_url`)
    }

    
}

export default PostApi