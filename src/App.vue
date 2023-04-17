<template>
  <div id="app">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');">
    
    
    <NavBar/>
    <router-view/>
    

    
    
    
  </div>
  </div>

  
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    
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

/* form */
.input-group.input-group-outline .form-label {
  display: flex;
  line-height: 3.925 !important;
  top: -0.375rem;
  margin-bottom: 0;
}
.input-group .form-label {
  position: absolute;
  top: 0.6125rem;

  transition: 0.2s ease all;
}
.input-group label {
  transition: all 0.3s ease;
}
label, .form-label {
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #7b809a;
  margin-left: 0.25rem;
}
.form-label {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: #7b809a;
}

/* button */

.input-group.input-group-outline .form-control {
  background: none;
  border: 1px solid #d2d6da;
  border-radius: 0.375rem;
  border-top-left-radius: 0.375rem;
   border-bottom-left-radius: 0.375rem;
  border-top-left-radius: 0.375rem !important;
  border-bottom-left-radius: 0.375rem !important;
  padding: 0.625rem 0.75rem !important;
  line-height: 1.3 !important;
}

.btn-primary:hover, .btn.bg-gradient-primary:hover {
  background-color: #e91e63;
  border-color: #e91e63;
  box-shadow: 0 14px 26px -12px rgba(233, 30, 99, 0.4), 0 4px 23px 0 rgba(233, 30, 99, 0.15), 0 8px 10px -5px rgba(233, 30, 99, 0.2);
}



/* CARD */

.pe-1 {
  padding-right: 0.25rem;
}
.py-3 {
  padding-top: 1rem ;
  padding-bottom: 1rem;
}
.border-radius-lg {

  border-radius: 0.5rem;}

.bg-gradient-primary{
  background-image: linear-gradient(195deg, #101cc2 0%, #D81B60 100%);
  width: 500px;
  font-weight: 700;
  
  
}
.btn-primary, .btn.bg-gradient-primary {
  color: #fff8f8;}


.row {
max-width: 100%;
padding-right: calc(var(--bs-gutter-x) * .5);
padding-left: calc(var(--bs-gutter-x) * .5);
margin-top: var(--bs-gutter-y);
}
.shadow-primary {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4) ;
  
  
}

.card {

border-width: 0;
border-color: rgba(0, 0, 0, 0.125);
border-radius: 0.75rem;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
background: #ffffff;
margin: 0.75rem;
z-index: 0;
display: flex;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
background-clip: border-box;
}
.card-header{
padding: 0rem;
position: relative;
z-index: 2;
margin-right: 1rem;
margin-left: 1rem;
margin-top: -1.5rem !important;

}


/* asdsad */


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