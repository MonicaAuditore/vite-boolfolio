<script>
import axios from "axios";
import PostCard from "../components/PostCard.vue";

export default {
  name: "PostsShow",
  components: {
    PostCard,
  },

  data() {
    return {
      posts: null,
    };
  },
  created() {
    // this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get("http://127.0.0.1:8000/api/posts/slug", {
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
    {{ $route.params.slug }}
  </div>
</template>

<style scoped></style>
