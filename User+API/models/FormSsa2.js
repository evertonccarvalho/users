var knex = require("../database/connection");
const { update } = require("./User");


class FormSsa2{


    

    async new(ubs,
        nome,
        criancasMenor6Meses,
        criancaAme,
        criancas2Anos,
        gestantes,
        gestantesAte20Anos,
        familias,
        familiasAcompanhada){
       try{
        await knex.insert({ubs,
            nome,
            criancasMenor6Meses,
            criancaAme,
            criancas2Anos,
            gestantes,
            gestantesAte20Anos,
            familias,
            familiasAcompanhada}).table("ssa2");
       }catch(err){
            console.log(err);
            return undefined; 
       } 
       
    }

    //vivos

    async nasviv(ubs,    
        nome,
        nomedamae,
        idade,
        endereco,
        municipioderesidencia,
        sexo,
        peso,
        datadenascimento,
        tipodeparto,
        localdeparto,){
       try{
        await knex.insert({ubs,    
            nome,
            nomedamae,
            idade,
            endereco,
            municipioderesidencia,
            sexo,
            peso,
            datadenascimento,
            tipodeparto,
            localdeparto,}).table("nascidosvivos");
          }catch(err){
               console.log(err);
               return undefined; 
          }
       }
   


    async obitos(ubs,    
        nome,
        nomedamae,
        idade,
        endereco,
        municipioderesidencia,
        sexo,
        peso,
        datadenascimento,
        tipodeparto,
        localdeparto,){
       try{
        await knex.insert({ubs,    
            nome,
            nomedamae,
            idade,
            endereco,
            municipioderesidencia,
            sexo,
            peso,
            datadenascimento,
            tipodeparto,
            localdeparto,}).table("obitos");
       }catch(err){
            console.log(err);
            return undefined; 
       }
    }


/////////////////////////////////editar formulario/////////////////

     async findFormAll(){
          try{
          var result = await knex.select(["id","nome"]).table("obitos");
          return result;
          }catch(err){
          console.log(err);
          return [];
          }
     }

     async findFormById(id){
          try{
          var result = await knex.select(["id","nome"]).where({id:id}).table("obitos");
          
          if(result.length > 0){
               return result[0];
          }else{
               return undefined;
          }

          }catch(err){
          console.log(err);
          return undefined;
          }
     }

     async updateForm(id,nome,){

          var formulario = await this.findformById(id);


          
          if(formulario != undefined){
               var editForm = {};

               




          }else{
               return {status: false,err: "O formulario não Existe!"}
          }
     }

     


}

module.exports = new FormSsa2();
