<template>
        <div>
            <h2>Registro de Usuário</h2>
            <hr>
            

            <div class="columns is-centered">
                 <div class="column is-one-quarter"> 
                    <div v-if="error != undefined">
                        <div class="notification is-danger">
                            <p>{{ error }}</p>  
                        </div>

                    </div>
                    
                    <label for="Nome">Nome</label>
                    <input class="input" placeholder="Nome do usuário" v-model="name">
                    <label for="email">Email</label>
                    <input type="email" placeholder="email@email.com" class="input" v-model="email">
                    <label for="senha">senha</label>
                    <input type="password" placeholder="******" class="input" v-model="password">
                    <hr>
                    <button class="button is-success" @click="register">Cadastrar</button>
                </div>
            </div>
            

        </div>
  
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

<style>

</style>