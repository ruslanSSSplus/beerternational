import $api from "../../../API/authAPI";

export default class UserService {
    static fetchUsers() {
        return $api.get('/users')
    }
}

