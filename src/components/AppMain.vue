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
            <h4>
              {{ post.category ? post.category.name : "-" }}
            </h4>
            <div>
              <img :src="posts.img" alt="" />
            </div>
            <p>
              {{ post.content }}
            </p>

            <div v-if="post.technologies.length > 0">
              <h3>Technologies:</h3>
              <ul>
                <li v-for="technology in post.technologies">
                  {{ technology.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
