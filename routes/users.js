var express = require('express');
var router = express.Router();
const user =  require('../models').personas;
var bd = '';
var idusuario = '';

var auth = function(req, res, next) {/*&& req.session.usuario === bd*/ 
  if (req.session ) 
     return next();
   else
    return res.sendStatus(401);
};


router.get("/usuarios",function(req,res){
  user.findAll().then(data=>{
    res.send(data);
  });
});

router.post("/usuarios",function(req,res){
  user.create({
    user:req.params.user,
    password:req.params.password,
    rol:req.params.rol,
  }).then(usuario => res.status(200).send(usuario))
  .catch(error => res.status(400).send(error));
});
router.delete("/usuarios/:idUser",function(req,res){
  user.destroy({where:{id:req.params.idUser}})
  .then(usuario => res.status(200).send(usuario))
  .catch(error => res.status(400).send(error));
});
router.put("/usuarios/:idUser",function(req,res){
  user.update({
    user:req.params.user,
    password:req.params.password,
    rol:req.params.rol,},
    {where:{id:req.params.idUser}})
  .then(usuario => res.status(200).send(usuario))
  .catch(error => res.status(400).send(error));
});


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.redirect("http://localhost:4200/cliente/" + idusuario);
});
router.get('/admin', function(req, res, next){
  res.redirect("http://localhost:4200/administrador/" + idusuario);
});

router.post('/validate', function(req, res, next) {
  bd = req.body.user;
  
  user.findAll({
    attributes: { exclude: [ "updatedAt"] }
  })
  .then(usuarios => {
 
  let contraseniabd;
  let usuario = req.body.user;
  let contrasenia = req.body.password;
  let rol = '';
  let id = '';
  
    for(let usuario1 of usuarios){
      if(usuario1['user'] == usuario){
        contraseniabd = usuario1['password'];
        rol = usuario1['rol'];
        id = usuario1['id'];
 
      }
    }
    idusuario =  id;
 
    console.log(id)
    console.log(contraseniabd);
    console.log(contrasenia);
 
   //Validación
    if(contraseniabd == contrasenia && rol ==  1) {
      //res.cookie('usuario', usuario, {expire: new Date() + 9999});
      //req.session.usuario = usuario;
      res.redirect('/users');
    }else if(contraseniabd == contrasenia && rol == 2) {
      //req.session.usuario = usuario;
      
      res.redirect('/users/admin');
 
    }else {
      //res.cookie('usuario', '', {expires: new Date(0)});
      req.session = null;
      res.redirect('http://localhost:4200/login')
    }
  })
  .catch(error => res.status(400).send(error))
 
});

module.exports = router;
