import axios from 'axios';
const API_URL = "https://2ee5455b-7faf-452a-a894-1463b6252065.mock.pstmn.io/api/auth/";
class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                userId: user.userId,
                userPw: user.userPw
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            })
    }
    register(user) {
        return axios.post(API_URL + 'register', {
            userId: user.userId,
            userName: user.userName,
            userPw: user.userPw,
            userPw2: user.userPw2
        })
    }
    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService();