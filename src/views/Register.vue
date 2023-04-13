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
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Registro de Usuário</h4>
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
                    <label class="form-label">Nome</label>
                    <input type="text" class="form-control" v-model="nome">
                  </div>
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="email">
                  </div>
                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="password">
                  </div>
                  
                  <div class="text-center">
                    <button @click="register" type="button" class="btn bg-gradient-primary w-100 my-4 mb-2" >Registrar</button>
                  </div>

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

<script>
import axios from 'axios';
export default {
    data(){
        return{
            name: '',
            password:'',
            email:'',
            error: undefined,
        }
    },
    methods:{
        
        register(){
        axios.post("http://localhost:8686/user",{
            name: this.name,
            password: this.password,
            email: this.email,
        }).then(res =>{
            console.log(res);
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