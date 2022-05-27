<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card max-width="50%" justify="center">
          <v-form>
            <v-card-title>
              <span class="title">로그인</span>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="user.userId" label="id"> </v-text-field>
              <v-text-field
                v-model="user.userPw"
                type="password"
                label="password"
              >
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="loginSubmit">로그인</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from "@/service/AuthService";
export default {
  name: "Login",
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  data() {
    return {
      user: {
        userId: "",
        userPw: "",
      },
      loading: false,
    };
  },
  /*  mounted: {
    if(loggedIn) {
      this.$router.push("/");
    },
  }, */
  methods: {
    async loginSubmit() {
      const response = await AuthService.login({
        user.userId = this.user.userId,

      });

      localStroage.setItem("token", response.data.token);
    },
  },
};
</script>
