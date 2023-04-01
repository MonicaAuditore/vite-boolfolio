<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuItems: [
        {
          routeName: "home",
          label: "Home",
        },
        {
          routeName: "about-us",
          label: "Chi siamo",
        },
        {
          routeName: "blog",
          label: "blog",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="row mb-4 mt-4">
        <div class="col">
          <h1 class="text-center">Boolfolio front end</h1>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-flex w-100 justify-content-center">
                  <li class="nav-item" v-for="menuItem in menuItems">
                    <router-link
                      :to="{ name: menuItem.routeName.name }"
                      class="nav-link"
                    >
                      {{ menuItem.label }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
