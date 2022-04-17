const ADMIN_USER = ["Ada", "Greta", "Vim", "Tim"]

function userAcces(req,res,next){
    if (ADMIN_USER.includes(req.query.user)){
        next()
    }
    else{
        res.send("Acceso Denegado")
    }
}
module.exports = userAcces