<template>
  <div>
    <h1>Editar Formulario</h1>
    <h1>Editar Formulario</h1>
    <h1>Editar Formulario</h1>
    <h1>Editar Formulario</h1>
    <h1>Editar Formulario</h1>
    <h1>Editar Formulario</h1>
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
        
        axios.get("http://localhost:8686/user",req).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        console.log("ola");
    }

}
</script>

<style>

</style>