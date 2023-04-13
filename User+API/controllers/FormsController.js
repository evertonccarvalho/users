// var Ssa2 = require("../models/User");
var FormSsa2 = require("../models/FormSsa2");
const { default: knex } = require("knex");

class FormsController
{   

    async create(req, res){
        var {           
        ubs,
        nome,
        criancasMenor6Meses,
        criancaAme,
        criancas2Anos,
        gestantes,
        gestantesAte20Anos,
        familias,
        familiasAcompanhada} = req.body;
       
        
        if(ubs == undefined || ubs == '' || ubs == ' '){
                
            res.status(400);                    
            res.json({err: "Ubs Precisa ser preenchida"});                
            return;

        }
     
        await FormSsa2.new(
            ubs,
            nome,
            criancasMenor6Meses,
            criancaAme,
            criancas2Anos,
            gestantes,
            gestantesAte20Anos,
            familias,
            familiasAcompanhada);
            

        res.status(200);
        res.send("Formulario de Ssa2 Registrado com Sucesso");
        console.log(req.body);
        // res.status(406);
        // res.send(result.err)
    }
    
    async createVivos(req, res){
        var {       
            ubs,    
            nome,
            nomedamae,
            idade,
            endereco,
            municipioderesidencia,
            sexo,
            peso,
            datadenascimento,
            tipodeparto,
            localdeparto,} = req.body;
       
        
            if(ubs == undefined || ubs == '' || ubs == ' '){
                
                res.status(400);                    
                res.json({err: "Ubs Precisa ser preenchida"});                
                return;

            }
        
        await FormSsa2.nasviv(
            ubs,
            nome,
            nomedamae,
            idade,
            endereco,
            municipioderesidencia,
            sexo,
            peso,
            datadenascimento,
            tipodeparto,
            localdeparto,);
            

        res.status(200);
        res.send("Formulario de Nascidos Vivos Registrado com Sucesso");
        console.log(req.body);
        // res.status(406);
        // res.send(result.err)
    }
async createObitos(req, res){
        var {       
            ubs,    
            nome,
            nomedamae,
            idade,
            endereco,
            municipioderesidencia,
            sexo,
            peso,
            datadenascimento,
            tipodeparto,
            localdeparto,} = req.body;
       
                     
            if(ubs == undefined || ubs == '' || ubs == ' '){
                
                res.status(400);                    
                res.json({err: "Ubs Precisa ser preenchida"});                
                return;

            }
     
        await FormSsa2.obitos(
            ubs,
            nome,
            nomedamae,
            idade,
            endereco,
            municipioderesidencia,
            sexo,
            peso,
            datadenascimento,
            tipodeparto,
            localdeparto,);
            

        res.status(200);
        res.send("Formulario de Obitos Preenchido com Sucesso");
    
    
        // res.status(406);
        // res.send(result.err)
    }

    async indexForm(req, res){
        var formularios = await FormSsa2.findFormAll();
        res.json(formularios);
    }

    async findForm(req, res){
        var id = req.params.id;
        var user = await User.findFormById(id);
        if(user == undefined){
            res.status(404);
            res.json({});
        }else{
            res.status(200)
            res.json(user);
        }
    }

}


module.exports = new FormsController();