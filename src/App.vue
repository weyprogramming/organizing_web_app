<template>
<nav class="navbar navbar-expand-lg navbar-fixed-top py-1 navbar-dark bg-danger mb-4">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand fs-4">Die Linke</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 ms-5 mb-lg-0">
        <li class="nav-item me-lg-2 ms-lg-2">
          <router-link to="/dashboard" class="nav-link active fs-5">Dashboard</router-link>
        </li>
        <li class="nav-item me-lg-2 ms-lg-2">
          <router-link to="/aufgaben" class="nav-link active fs-5">Aufgaben</router-link>
        </li>
        <li class="nav-item me-lg-2 ms-lg-2">
          <router-link to="/ideen" class="nav-link active fs-5">Ideen</router-link>
        </li>
        <li class="nav-item me-lg-2 ms-lg-2">
          <router-link to="/abstimmungen" class="nav-link active fs-5">Abstimmungen</router-link>
        </li>
        <li class="nav-item me-lg-2 ms-lg-2">
          <router-link to="/sitzungen" class="nav-link active fs-5">Sitzungen</router-link>
        </li>
      </ul>
      <div class="col-lg-2">
        <div class="d-grid">
            <router-link to="/login" class="btn btn-light">Anmelden</router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
    <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
