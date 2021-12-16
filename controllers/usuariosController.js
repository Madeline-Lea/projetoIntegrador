    const { Usuario } = require("../models");


    const usuarioController = {
        index: async(req, res) => {
            const usuarios = await Usuario.findAll();
        
            return res.json(usuarios);
        },
        criar: async(req, res) =>{
            const { id, nome, email, senha, data, genero, nome_usuario } = req.body;
            
            const usuarios = await usuarios.create({id, nome, email, senha, data, genero, nome_usuario});
            
            return res.status(201).json(usuarios);
        },
        atualizar: async (req, res) => {
            const  id  = req.params.id;
       
            const { id, nome, email, senha, data, genero, nome_usuario } = req.body;
            
            const usuarios = await  usuarios.update({id, nome, email, senha, data, genero, nome_usuario});

            if(usuarios == null){

                return res.status(404).json({mensagem: "Usuario não encontrado, verifique suas credenciais e tente novamente."})
            }

        },
        mostrarUsuario: (req, res) => {
           const id =  req.params.id;

           const usuarios = await usuarios.findOne({where: { id }});  
        },

        deletar: () => {
            
        }

    }
    module.exports = usuarioController