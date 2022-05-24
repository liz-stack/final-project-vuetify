<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-btn v-for="link in links" :key="link" text>
        {{ link }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <!--TODO: 만약 로그인안된상태일때 v-if -->
      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    links: ["Freeboard", "Qna", "Faq"],
  }),
};
</script>