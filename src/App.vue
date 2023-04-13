<template>
  <div id="app">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');">
    
    
    <NavBar/>
    <router-view/>
    <about-view/>
    

    
    
    <Footer/>
  </div>
  </div>

  
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from './components/Footer.vue';
export default {
  name: 'Home',
  components: {
    NavBar,
    Footer
  }
}
</script>

<Header>

</Header>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}
*{ 
  
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container{
  padding-top: 100px;
  min-height: 250px;
  
}
.main{
  background-color: rgb(255, 255, 255);  
  border-radius: 50px;
  padding: 50px;
  margin-top: 20px;
  
}

</style>
<!-- <style>
main{
  background-color: black;
}

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} 
</style> -->