<template>
  <v-card max-width="50%">
    <v-form>
      <v-card-title>
        <span class="title">로그인</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="userId" label="id"> </v-text-field>
        <v-text-field v-model="userPw" type="password" label="password">
        </v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="loginSubmit">로그인</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      userId: null,
      userPw: null,
    };
  },
  methods: {
    loginSubmit() {
      console.log("submitted");
    },
  },
};
</script>
