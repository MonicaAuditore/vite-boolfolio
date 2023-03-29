<script>
import axios from "axios";

export default {
  name: "AppMain",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/posts").then((response) => {
      console.log(response.data);
      this.posts = response.data.posts.data;
    });
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row mb-4">
        <div class="col">
          <h1>Boolfolio front end</h1>
        </div>
      </div>

      <div class="row mb-4">
        <div v-for="post in posts" class="col">
          <div class="mt-4 mb-4">
            <h2>
              {{ post.title }}
            </h2>
            <p>
              {{ post.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
