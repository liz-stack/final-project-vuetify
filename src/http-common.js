import axios from "axios";

export default axios.create({
    baseURL: "https://2ee5455b-7faf-452a-a894-1463b6252065.mock.pstmn.io",
    headers: {
        "Content-type": "application/json"
    }
});
