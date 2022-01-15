//Configuração
    //Chamando o modelo de Respostas

    const { Respostas } = require("../models/respostas");

//Controller
    //Controller de respostas      
    const respostasController = {

            index: async ( req, res ) => {

                const respostas = await Respostas.findAll();

                return res.json(respostas);
            },
            criarResposta: async ( req, res ) => {
                const { id, usuario_id, pergunta_id, datapostagem, conteudo } = req.body;

                const respostas = await Respostas.create( id, usuario_id, pergunta_id, datapostagem, conteudo );
                
                return res.status(201).json(respostas); 
            },
            atualizarResposta: async ( req, res ) => {
                const  id  = req.params.id;
       
                const { id, usuario_id, pergunta_id, datapostagem, conteudo } = req.body;
                
                const respostas = await  Perguntas.update({id, usuario_id, pergunta_id, datapostagem, conteudo});
    
                if(respostas == null){
    
                    return res.status(404).json({mensagem: "Resposta não encontrada, tente novamente."});
            }
        }
     };

     module.exports = respostasController