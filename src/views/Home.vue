<template>
  <h3>home</h3>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  async created() {
    const response = await axios.get("user");
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token");
    }
    consloe.log(response);
  },
};
</script>
