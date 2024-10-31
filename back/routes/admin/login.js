var express = require('express');
var router = express.Router();
var usuariosModel = require ('./../../models/usuariosModels');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
     layout: 'admin/layout' 
    });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(); // Destruir las variables de sesión (id y usuario)
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario; // Capturing the username from the request body
    var password = req.body.password; // Capturing the password from the request body

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data !== undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      res.redirect('/admin/novedades'); // Redirect to the 'novedades' page if user is found
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true // Render the login page with an error message
      });
    }
  } catch (error) {
    console.log(error); // Log any errors to the console
  }
});

module.exports = router;
