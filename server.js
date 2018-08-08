const express = require('express');
const app = express();
const hbs = require('hbs');

app.use( express.static( __dirname + "/public" ));

require('./views/helpers/helpers')

const port = process.env.PORT || 8080;

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials/');

app.set('view engine' , 'hbs');

app.get('/' , (req, resp) => {
     resp.render('index', {
         nombre: 'Cristian'
     });
});

app.get('/about' , (req, resp) => {
    resp.render('about', {
        nombre: 'Cristian'
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});