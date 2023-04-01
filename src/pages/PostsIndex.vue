<script>
import axios from "axios";
export default {
  name: "PostIndex",
  data() {
    return {
      posts: [],
      currentPage: 1,
      lastPage: 1,
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      this.getPosts();
    },
    getPosts() {
      axios
        .get("http://127.0.0.1:8000/api/posts", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          console.log(response.data);
          // Stampo le info dei post
          this.posts = response.data.posts.data;
          // Stampo l'ultima pagina per creare i link alle altre pagine
          this.lastPage = response.data.posts.last_page;
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <div v-for="i in lastPage" style="display: inline-block">
          <button @click="changePage(i)">Pagina {{ i }}</button>
        </div>
      </div>
    </div>

    <div class="row mb-4 g-3">
      <div v-for="post in posts" class="col-12 col-sm-4 col-md-3">
        <div class="card h-100" style="width: 18rem">
          <img
            :src="post.img ?? 'https://placehold.co/600x400'"
            class="card-img-top"
            :alt="post.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <h6>
              <i class="fa-solid fa-tag"></i>
              {{ post.category ? post.category.name : " Nessuna categoria" }}
            </h6>
            <p class="card-text">
              {{ post.content }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>

          <div class="card-footer text-body-secondary">
            <span class="badge rounded-pill text-bg-primary">
              technologies
            </span>
          </div>
        </div>

        <div
          class="card-footer text-body-secondary"
          v-if="post.technologies.length > 0"
        >
          <span
            class="badge rounded-pill text-bg-primary"
            v-for="technologies in post.technology"
          >
            {{ technology.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
