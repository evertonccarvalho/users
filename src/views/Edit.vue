<template>
        <div>
            <h2>Edição de usuário</h2>
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
                    <hr>
                    <input type="number" placeholder="role" class="input" v-model="role">
                    <hr>
                    <button class="button is-success" @click="update">Editar</button>
                </div>
            </div>
            

        </div>
  
</template>

<script>
import axios from 'axios';

export default {
    created(){
        
        var req = {
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }
        
        axios.get("http://localhost:8686/user/" + this.$route.params.id, req).then(res =>{
            console.log(res);
            this.name = res.data.name;
            this.email = res.data.email;
            this.role = res.data.role;
            this.id = res.data.id;
            
        }).catch(err => {
            console.log(err.response);
            this.$router.push({name: 'Users'});
        })

    },
    data(){
        return{
            name: '',
            id: -1,
            email:'',
            role:0,
            error: undefined,
        }
    },
    methods:{
        
        update(){


            var req = {
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }


        axios.put("http://localhost:8686/user",{
            name: this.name,
            email: this.email,
            role: this.role,
            id: this.id,
        },req).then(res =>{
            console.log(res);
            this.$router.push({name: 'Users'});
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