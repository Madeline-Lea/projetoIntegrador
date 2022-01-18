//Callback do Modelo
    // Modelo de perguntas
        const { Perguntas } = require("../models/perguntas") 

//Controller 
    // Controller de perguntas

    //Função pro front:
        var perguntaEJS = [{

            nomeDeUsuario = req.body.nomeDeUsuario,
            data_postagem = req.body.data,
            conteudo = req.body.conteudo,
            solucao = req.body.solucao

        }];

        const perguntasController = {
            index: async (req, res) => {
                const perguntas = await Perguntas.findAll()

                res.json(perguntas)
            },
            criarPergunta: async (req, res) => {
                const {id, usuario_id, conteudo, data_postagem, solucao} = req.body

                const perguntas = await Perguntas.create({id, usuario_id, conteudo, data_postagem, solucao}) 

                res.status(201).json(perguntas)
            },
            atualizarPergunta: async (req, res) => {
                const  id  = req.params.id;
            
                    const { id, usuario_id, conteudo, data_postagem, solucao } = req.body;
                    
                    const perguntas = await  Perguntas.update({id, usuario_id, conteudo, data_postagem, solucao});

                    if(perguntas == null){

                        return res.status(404).json({mensagem: "Pergunta, não encontrada e tente novamente."});
                    }
            }

        }
module.exports = perguntasController