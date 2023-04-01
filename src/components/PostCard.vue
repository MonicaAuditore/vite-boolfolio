<script>
export default {
  name: "PostCard",
  data() {
    return {};
  },
  props: {
    post: {
      type: Object,
    },
  },
  methods: {},
};
</script>

<template>
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
      <span class="badge rounded-pill text-bg-primary"> technologies </span>
    </div>
  </div>
</template>

<style scoped></style>
