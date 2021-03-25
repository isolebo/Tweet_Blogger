
import Axios from './BaseApi'

class UpdateApi{
    
    static getAllUpdates(){//gets all the Updates from the API
        return Axios.get(`/updates/`)
    }

    static getUpdate(Update_url){
        return Axios.get(`/updates/`,Update_url)
    }

    static getUpdatesForPost(post_id){
        return Axios.get(`/updates?postId=${post_id}`)
    }

    static newUpdate(new_Update_object){
        return Axios.post(`updates`,new_Update_object)
    }

    static updateUpdate(Update_url, updated_Update){
        return Axios.put(`/update/Update_url`,updated_Update)
    }

    static patchUpdate(Update_url, updated_fields){//updates a part of the Update API
        return Axios.patch(`/updates/Update_url`,updated_fields)
    }

    static deleteUpdate(Update_url){//deletes a Update in the API
        return Axios.delete(`/updates/Update_url`)
    }

    
}

export default UpdateApi