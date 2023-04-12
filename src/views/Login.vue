<template>
<main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Login</h4>
                  <div class="row mt-3">
                    
                    <br>
                    <br>
                    <br>
                    
                  </div>
                </div>
              </div>
              

              
              <div class="card-body">
                <form role="form" class="text-start">
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="email">
                  </div>
                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="password">
                  </div>
                  <div class="form-check form-switch d-flex align-items-center mb-3">
                    <input class="form-check-input" type="checkbox" id="rememberMe" checked>
                    <label class="form-check-label mb-0 ms-3" for="rememberMe">Lembrar</label>
                  </div>
                  <div class="text-center">
                    <router-link to="login" @click="login"><button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2" >Logar</button></router-link>
                  </div>
                  <p class="mt-4 text-sm text-center">
                    Não tem uma conta?
                    <router-link to="register"><a href="../pages/sign-up.html" class="text-primary text-gradient font-weight-bold">Nova Conta</a></router-link>
                  </p>
                  <div v-if="error != undefined">
                <div class="notification is-danger">
                    <p>{{ error }}</p>  
                </div>
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </main>
</template>
<!-- <template>
       
  
</template> -->

<script>
import axios from 'axios';
export default {
    data(){
        return{
            password:'',
            email:'',
            error: undefined,
        }
    },
    methods:{
        
        login(){
        axios.post("http://localhost:8686/login",{
           
            password: this.password,
            email: this.email,
        }).then(res =>{
            console.log(res);
            localStorage.setItem('token',res.data.token);
            this.$router.push({name: 'home'});
        }).catch(err =>{
            var msgErro = err.response.data.err;
            this.error = msgErro;
        })
    }

    }

}
</script>
<style scoped >

.row{
  margin-top: 100px;
}

</style>

<style>

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
  background-image: linear-gradient(195deg, #EC407A 0%, #D81B60 100%);
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