var knex = require("../database/connection");
// const { update } = require("./User");


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
   

//////////////// obitos ////////////////
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


/////////////////////////////////encontrar formulario/////////////////

     async findFormAll(){
          try{
          var result = await knex.select([
               "id",
               "ubs",
               "nome",
               "nomedamae",
               "idade",
               "endereco",
               "municipioderesidencia",
               "sexo",
               "peso",
               "datadenascimento",
               "tipodeparto",
               "localdeparto"]).table("obitos");
          return result;

          }catch(err){
          console.log(err);
          return [];
          }
     }

     async findFormById(id){
          try{
          var result = await knex.select([
          "id",
          "ubs",
          "nome",
          "nomedamae",
          "idade",
          "endereco",
          "municipioderesidencia",
          "sexo",
          "peso",
          "datadenascimento",
          "tipodeparto",
          "localdeparto"]).where({id:id}).table("obitos");
          
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
///////////////////edtiar formularlio encontraro /////////////////
     async findFormByNome(nome){
          try{
               var result = await knex.select([
                    "id",
                    "ubs",
                    "nome",
                    "nomedamae",
                    "idade",
                    "endereco",
                    "municipioderesidencia",
                    "sexo",
                    "peso",
                    "datadenascimento",
                    "tipodeparto",
                    "localdeparto"]).where({nome:nome}).table("obitos");

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
   /////////////////////
     async findFormNome(nome){
     try{
         var result = await knex.select("*").table("obitos").where({nome: nome});
         
         if(result.length > 0){
             return true;
         }else{
             return false;
         }

     }catch(err){
         console.log(err);
         return false;
     }
 } 

/////////////////////////


     async updateForm(id, ubs, nome, nomedamae, idade, endereco, municipioderesidencia, sexo, peso, datadenascimento, tipodeparto,localdeparto){

          var obito = await this.findFormById(id);

          if(obito != undefined){

               var editObito = {};

               if(nome != undefined){ 
                    if(nome != obito.nome){
                         var result = await this.findFormNome(nome);
                         if(result == false){
                              editObito.nome = nome;
                         }else{
                              return {status: false,err: "Falecido ja Morreu"}
                         }
                    }
               }

               if(nome != undefined){
                    editObito.nome = nome;
               }


               try{
                    await knex.update(editObito).where({id: id}).table("obitos");
                    return {status: true}
               }catch(err){
                    return {status: false,err: err}
               }
          
          }else{
          return {status: false,err: "O Formulario Não EXISTE"}
          }
     }  
}

module.exports = new FormSsa2();
