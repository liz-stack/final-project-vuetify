import http from "../http-common";


class UserService {
    register(data) {
        return http.post("/register", data);
    }


}

export default new UserService();