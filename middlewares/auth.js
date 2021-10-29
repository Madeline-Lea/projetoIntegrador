const auth = (req, res, next) => {
    if(typeof(req.session.nome) != "undefined"){
        return next()
    } else {
        return res.send("Loggon into your account to get acess.")
    }

};

module.exports = auth