<template>
  
    <div class="container"> 
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
            <input class="form-control" type="number" placeholder="Nome da Mãe" v-model="criancasMenor6Meses">
          </div>

          <div class="col">
            <label>Idade</label>
            <input class="form-control" type="number" placeholder="Idade" v-model="criancaAme">
          </div>

          <div class="col">
            <label>Endereço</label>
            <input class="form-control" type="number" placeholder="Endereço" v-model="criancas2Anos">
          </div>
        </div>
        <div class="row g-3">
          <div class="col"> 
            <label>Municipio de Residência</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="gestantes">
          </div>

          <div class="col"> 
            <label>Sexo</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="gestantesAte20Anos">
          </div>
        </div>
        <div class="row g-3">

          <div class="col">
            <label>Peso</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="familias">
          </div>

          <div class="col">  
            <label>Data de Nascimento</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="familiasAcompanhada">
          </div>

          <div class="col">  
            <label>Hospitilar ou Domiciliar</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="familiasAcompanhada">
          </div>
          <div class="col">  
            <label>Municipio de Ocorrencia</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="familiasAcompanhada">
          </div>
          <div class="col">  
            <label>Tipo de parto</label>
            <input class="form-control" type="number" placeholder="Crianças < 6 Meses" v-model="familiasAcompanhada">
          </div>
          
        </div>
          
      </form>  
      <div class="enviar">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Marque
          </label>
        </div>
        <button class="btn btn-primary" @click="cadastrarnascidosvivos">Cadastrar</button>
        <!-- <small id="nome-erro" v-show="deuErro"> Nome invalido tente novamente</small> -->
      </div>
      <hr>
      
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            ubs:"",
            nome:"",
            criancasMenor6Meses:0,
            criancaAme:0,
            criancas2Anos:0,
            gestantes: 0,
            gestantesAte20Anos:0,
            familias:0,
            familiasAcompanhada:0,
            
        }
    },
    methods:{
        
      cadastrarnascidosvivos(){
        axios.post("http://localhost:8686/ssa2",{
            ubs: this.ubs,
            nome: this.nome,
            criancasMenor6Meses: this.criancasMenor6Meses,
            criancaAme: this.criancaAme,
            criancas2Anos:this.criancas2Anos,
            gestantes: this.gestantes,
            gestantesAte20Anos:this.gestantesAte20Anos,
            familias:this.familias,
            familiasAcompanhada:this.familiasAcompanhada,
            
            
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
