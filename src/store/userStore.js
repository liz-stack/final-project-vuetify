import router from "@/router";

const userStore = {
    state: {
        userId: '',
        userPw: '',
        token: ''
    },
    mutations: {
        login: function (state, payload) {
            state.userId = payload.userId
            state.userPw = payload.userPw
            state.token = payload.token
        },
        loginCheck: function (state) {
            if (!state.token) {
                router.push({
                    name: 'login'
                }).catch(e => {
                    console.log(e)
                })
            }
        }
    }
}

export default userStore