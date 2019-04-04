const express = require('express')
const morgan = require('morgan')
const path = require('path')
const connection = require('express-myconnection')
const mysql = require('mysql')

const conn = express()

//importar rutas
const usuRouter = require('./router/usuRouter');

//configuraciones express
conn.set('port', process.env.PORT || 4000 )
conn.set('view engime', 'ejs');
conn.set('view', path.join(__dirname, 'view'));

//middlewares
conn.use(morgan('dev'))
conn.use(connection(mysql, {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	port: 3306,
	database: 'node2'
}, 'single' ))//*/
//conn.use(express.urlencoded({extended : false}))

//routes - peticiones
conn.use('/', usuRouter);

//archivos de complemento
//conn.use(express.static(path.join(__dirname, 'public')))


conn.listen(4000, () => {
	console.log('Conexion por el puerto 4000');
})
