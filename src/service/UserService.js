import axios from 'axios'
//import authHeader from './AuthHeader'

const API_URL = "https://2ee5455b-7faf-452a-a894-1463b6252065.mock.pstmn.io/api/boards/";

class UserService {
    getAll() {
        return axios.get(API_URL + 'free')
    }
}

export default new UserService();