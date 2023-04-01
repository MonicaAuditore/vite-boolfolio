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

    <div class="row mb-4">
      <div v-for="post in posts" class="col">
        <div class="card" style="width: 18rem">
          <img
            :src="post.img ?? 'https://placehold.co/600x400'"
            class="card-img-top"
            :alt="post.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <h6></h6>
            <p class="card-text">
              {{ post.content }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <!-- <div class="mt-4 mb-4">
          <h2>
            {{ post.title }}
          </h2>
          <h4>
            {{ post.category ? post.category.name : "-" }}
          </h4>
          <h4>
            Creato:
            {{ post.formatted_created_at }}
          </h4>
          <div>
            <img :src="post.img" style="width: 200px" alt="" />
          </div>
          <p>
            {{ post.content }}
          </p>

          <div v-if="post.technologies.length > 0">
            <h3>Technologies:</h3>
            <ul>
              <li v-for="technologies in post.technologies">
                {{ technologies.name }}
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
