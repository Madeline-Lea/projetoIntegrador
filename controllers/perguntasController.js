//Callback do Modelo
    // Modelo de perguntas
const { Perguntas } = require("../models/perguntas") 

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

    solucaoPergunta: async (req, res) => {
        const solucao = req.body.solucao
        
    }

}
module.exports = perguntasController