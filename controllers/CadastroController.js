let userInfo = 
    [
        {
         nome:"Leonardo", 
         sobrenome:"Miguel",
         username: "Madeline-Lea",
         idade: 19, email:"1234@gmail.com",
         senha: "333000222333",
         confirnEmail:"1234@gmail.com",
         confirmPassword:333000222333, 
        }
    ];



const CadastroController = {
    index:(req, res) => {
        
       return res.render("cadastro")
    },

    save:(req, res)=> { 

        const [{nome, sobrenome, username, idade, email, senha, confirmEmail, confirmPassword}] = req.body 
        userInfo.push({nome, sobrenome, username, idade, email, senha, confirmEmail, confirmPassword})
        return res.json("cadastro")
    },

    store:(req, res) => { 

        return res.render(""); 
    },

    edit:(req, res) => {    

        const {id} = req.params
        const user = userInfo.find(user => user.id == id)
        return res.redirect("/", {userInfo})
    },
    
    update:(req, res) => {

    const {nome, sobrenome, username, idade, email, senha, confirmEmail, confirmPassword} = req.body
    const {id} = req.params
    const userIndex = userInfo.findIndex(user => user.id == id)


    const userUpdate = {
        nome,
        sobrenome,
        username,
        idade,
        email,
        senha,
        confirmEmail,
        confirmPassword
            }

    userInfo[userIndex] = userUpdate 
    return res.redirect("/")
        },

    delete: (req, res) => {
        const {id} = req.params;
        const userIndex = userInfo.findIndex(user => user.id == id);

        services.splice(userIndex, 1);
        return res.redirect("/")   

    }
}


module.exports = CadastroController
