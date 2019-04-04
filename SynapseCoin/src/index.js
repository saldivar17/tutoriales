const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const connection = require('express-myconnection');
const conn = express();

//configuraciones
conn.set('port', process.env.PORT || 3000);
conn.set('view engine', 'ejs');
conn.set('view', path.join(__dirname, 'view'));

//middlewares
conn.use(morgan('dev'));	//utiliza configuracion dev
conn.use(connection(mysql, {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	port: 3306,
	database: ''
}, 'single'));

conn.listen(conn.get('port'), () => {
	console.log('Conexion exitosa');
});