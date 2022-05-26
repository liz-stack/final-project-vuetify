<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card max-width="50%">
          <v-form>
            <v-card-title>
              <span class="title">회원가입</span>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="userId" label="id"> </v-text-field>
              <v-text-field v-model="userName" label="userName"> </v-text-field>
              <v-text-field v-model="userPw" type="password" label="password">
              </v-text-field>
              <v-text-field
                v-model="userPw2"
                type="password"
                label="confirm password"
              >
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="registerSubmit">등록</v-btn>
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
  name: "Register",
  data() {
    return {
      userId: "",
      userName: "",
      userPw: "",
      userPw2: "",
    };
  },
  methods: {
    async registerSubmit() {
      const response = await AuthService.register({
        userId: this.userId,
        userName: this.userName,
        userPw: this.userPw,
        userPw2: this.userPw2,
      });

      console.log(response);
    },
  },
};
</script>