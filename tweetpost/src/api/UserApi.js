import Axios from './BaseApi'


class UserApi {
    static getAllUsers() { 
        return Axios.get(`/users/`)
    }

    static getUser(userId) {
        return Axios.get(`/users/${userId}`)
    }
    
    static newUser(new_user_object) {
        return Axios.post(`/users`, new_user_object)
    }
    
    static updateUser(user_url, updated_user) {
        return Axios.put(`/users/`, updated_user)
    }

    static patchUser(user_url, updated_fields) { 
        return Axios.patch(`/user/`, updated_fields)
    }

    static deleteUser(user_url) { 
        return Axios.deletes(`/users/user_url`)
    }


}

export default UserApi