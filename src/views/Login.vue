<template>
        <div>
            <h2>Login</h2>
            <hr>
            

            <div class="columns is-centered">
                 <div class="column is-one-quarter"> 
                    <div v-if="error != undefined">
                        <div class="notification is-danger">
                            <p>{{ error }}</p>  
                        </div>

                    </div>
                    
                    <label for="email">Email</label>
                    <input type="email" placeholder="email@email.com" class="input" v-model="email">
                    <label for="senha">senha</label>
                    <input type="password" placeholder="******" class="input" v-model="password">
                    <hr>
                    
                    <div class="buttons">
                        <a class="button is-primary">
                            <router-link to="login" @click="login">Logar</router-link>
                        </a>
                        <a class="button is-primary">
                            <router-link to="register">Registro</router-link> 
                        </a>
                        
                        
                    </div>
                </div>
            </div>
            

        </div>
  
</template>

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

<style>


</style>