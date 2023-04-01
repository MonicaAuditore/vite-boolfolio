<script>
import axios from "axios";
import PostCard from "../components/PostCard.vue";

export default {
  name: "PostIndex",
  components: {
    PostCard,
  },

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
    <div class="row mb-4 g-3">
      <div v-for="post in posts" class="col-12 col-sm-4 col-md-3">
        <PostCard :post="(post = post)" />

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
    <div class="row mb-4">
      <div class="col">
        <nav class="d-flex justify-content-center mt-4">
          <ul class="pagination">
            <li class="page-item" v-for="i in lastPage">
              <button
                class="page-link align-self-end"
                :class="{ active: currentPage == i }"
                @click="changePage(i)"
              >
                {{ i }}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
