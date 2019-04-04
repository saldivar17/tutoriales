const control = {};

control.inicio = (req, res) => {
	/*req.getConnection((err, conn) => {
		conn.query('select * from usuario', (err, usuario) => {
			if(err){
				res.json(err);
			}
			res.render('usuView', {
				data: usuario,
			});
		})
	})*/
	//res.send('conect')
	res.render('usuView')
	console.log('conexion exitosa')//*/
}

module.exports = control;