<template>
  
    <div class="container"> 
      <div class="main">
      <h1>Nascidos Vivos</h1>
      <br>
      <form class="row g-3">
        <div class="col">
          <input type="text" class="form-control" placeholder="Responsavel" aria-label="Responsavel" v-model="nome">
        </div>
        <div class="col">          
          <select id="ubs" class="form-select" v-model="ubs">
            <option selected>UBS</option>
            <option>Sede I</option>
            <option>Sede II</option>
            <option>Batoque</option>
            <option>Baixa da Umburana</option>
            <option>Baixio Grande</option>
            <option>Castanhão</option>
            <option>Tibolo</option>
          </select>
        </div>
        <div class="row g-3">
          <div class="col">
            <label>Nome da Mãe</label>
            <input class="form-control" type="text" placeholder="Nome da Mãe" maxlength="150" v-model="nomedamae">
          </div>
          <div class="col">
            <label>Endereço</label>
            <input class="form-control" type="text" placeholder="Endereço" maxlength="150" v-model="endereco">
          </div>

          <div class="col"> 
            <label>Municipio de Residência</label>
            <input class="form-control" type="text" placeholder="Municipio de Residência" maxlength="50" v-model="municipioderesidencia">
          </div>

          
        </div>
        <div class="row g-3">

          <div class="col">
            <label>Idade</label>
            <input class="form-control" type="text" placeholder="Idade" maxlength="2" v-model="idade">
          </div>

          <div class="col"> 
            <label>Peso</label>
            <input class="form-control" type="text" placeholder="Ex: 3.560" maxlength="5" step="0.01" v-model="peso">
          </div>

          <div class="col"> 
            <label>Data de Nascimento</label>
            <input class="form-control" type="date" placeholder="Data de nascimento" v-model="datadenascimento">
          </div>
        </div>


        <div class="row g-3">
          <div class="col">  
            <select class="form-select" size="1" aria-label="size 1 select example" v-model="sexo">
                <option selected>Sexo</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>              
              </select>
          </div>
          <div class="col">  
            <select class="form-select" size="1" aria-label="size 2 select example" v-model="tipodeparto">
              <option selected>Tipo de parto</option>
                <option value="Normal">Normal</option>
                <option value="Cesario">Cesario</option>              
              </select>
          </div>
          <div class="col">  
            <select class="form-select" size="1" aria-label="size 2 select example" >
                
                <option selected value="Hospitalar">Hospitalar</option>
                <option value="Domiciliar">Domiciliar</option>              
              </select>
          </div>
        </div>
      </form>  
      <br>
      <br>
      <br>
      <br>
      <div class="enviar">
        <button class="btn btn-primary" @click="cadastrarnascidosvivos">Cadastrar</button>
        <!-- <small id="nome-erro" v-show="deuErro"> Nome invalido tente novamente</small> -->
      </div>
    </div>
    </div>
    

    
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            ubs:"",
            nome:"",
            nomedamae:"",
            idade:0,
            endereco:"",
            municipioderesidencia: "",
            sexo:"",
            peso:0,
            datadenascimento:0,
            tipodeparto:"",
            localdeparto:"",
            

            
        }
    },
    methods:{
        
      cadastrarnascidosvivos(){
        axios.post("http://localhost:8686/Nascidosvivos",{
            ubs: this.ubs,
            nome: this.nome,
            nomedamae: this.nomedamae,
            idade: this.idade,
            endereco: this.endereco,
            municipioderesidencia:this.municipioderesidencia,
            sexo: this.sexo, 
            peso: this.peso,
            datadenascimento: this.datadenascimento,
            tipodeparto: this.tipodeparto,
            localdeparto: this.localdeparto,

            
            
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
