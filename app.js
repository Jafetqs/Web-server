require('colors');
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

//handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// middleware servir contenido estático
app.use(express.static('public')); //la ruta public tiene mayor prioridad a las rutas anteas creadas


app.get('/',  (req, res) => {

    res.render('home',{
        nombre: 'jafet Quesada siles',
        titulo: 'Hola desde el back :)'
    });
  
});

app.get('/generic',  (req, res) => {

    res.render('generic',{
        nombre: 'jafet Quesada siles',
        titulo: 'Hola desde el back :)'
    });
  
});
app.get('/elements',  (req, res) => {

    res.render('elements',{
        nombre: 'jafet Quesada siles',
        titulo: 'Hola desde el back :)'
    });
  
});
app.get('/generic',  (req, res) => {

    res.sendFile(__dirname+'/public/generic.html'); // se tiene que crear el path del server  con __dir y la ruta del archivo que se quiere mostrar
  
});
app.get('/elements',  (req, res) => {

    res.sendFile(__dirname+'/public/elements.html'); // se tiene que crear el path del server  con __dir y la ruta del archivo que se quiere mostrar
  
});
app.get('*',  (req, res) => {

    res.render('404',{
        error: '404 | PAGE NOT FOUND :('
    }); // se tiene que crear el path del server  con __dir y la ruta del archivo que se quiere mostrar
  
});



app.listen(port, () => {
    console.log(`App listening on port ${port.toString().magenta}`.cyan);
});