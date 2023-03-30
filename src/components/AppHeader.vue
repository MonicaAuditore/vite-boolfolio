<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row mb-4">
        <div class="col">
          <h1 class="text-center">Boolfolio front end</h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
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
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="nav-link">
                      Home
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name: 'about-us' }" class="nav-link">
                      Chi siamo
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
