const req = require("express/lib/request")

let controller = {
    index: (req, res) =>{
        res.render("index")
    },
    admin: (req,res)=>{
        res.send("Bienvenido/a")
    },
    register: (req,res)=>{
        res.render('register')
    },
    user: (req,res)=>{
        req.session.user = { 
            
            name: req.body.name,
            email: req.body.email,
           color: req.body.color,
           age: req.body.age,
           pass: req.body.pass
        } 
        
       // res.send(req.session.user)
       res.redirect('/result')
      

    },
    result: (req,res)=>{
        
          res.render('result', {session: req.session})
    }
  
}

module.exports = controller