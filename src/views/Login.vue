<template>
  <v-container pa-4 fill-height style="max-width: 450px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-card class="elevation-1">
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field v-model="id" label="아이디를 입력하세요">
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력하세요"
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" to="/">로그인</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>
