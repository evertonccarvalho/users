<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <a class="navbar-item" href="/">
      
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link to="/">Home</router-link> 
      </a>

      <a class="navbar-item">
        ??
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Formulários
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            SSA2
          </a>
          <a class="navbar-item">
            Nascidos Vivos
          </a>
          <a class="navbar-item">
            Obitos
          </a>
          <!-- <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a> -->
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <router-link to="admin/users">Admin</router-link> 
          </a>
          <a class="button is-light">
            <router-link to="login">log in</router-link>
          </a>
          <a v-on:click="logout" class="button is-light" v-if="logado === true">Logout</a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar', 
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({name: 'home'});
    }
  }
}
</script>

<style>

</style>