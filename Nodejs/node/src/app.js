const express = require('express'); 
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const connection = require('express-myconnection');

const app = express();


//importando rutas
const perRouter = require('./routers/perRouter');



//settings - configuracionpathes
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares - funciones que se ejecutan antes de las peticiones
app.use(morgan('dev'));
app.use(connection(mysql, {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'pruebaNodejs'
},'single'));
app.use(express.urlencoded({extended : false}));		//es false, xq nos va enviar solo los valores del input


//routes - peticiones
app.use('/', perRouter)

//static file - archivos de complementos
app.use(express.static(path.join(__dirname, 'public')));

//empezando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port 8080');
});