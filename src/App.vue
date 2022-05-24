<template>
  <v-app id="App">
    <!-- 최상단 v-app-bar -->
    <AppBar></AppBar>

    <!-- main -->
    <v-main class="grey lighten-3">
      <v-container>
        <v-sheet min-height="70vh" rounded="lg">
          <router-view />
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default {
  name: "App",
  components: { AppBar },
};
</script>