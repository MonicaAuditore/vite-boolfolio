<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppFooter,
  },
  methods: {},
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@import "./styles/main";
</style>
