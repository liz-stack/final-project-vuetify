export default function authHeader() { //retrieving data from server
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return {
            Authorization: 'Bearer ' + user.accessToken
        };
    } else {
        return {};
    }
}