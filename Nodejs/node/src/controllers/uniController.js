const control = {};

control.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('select u.codigo, p.nom, u.carrera, u.ciclo, u.nombre from persona p inner join univerdidad u on p.id = u.idusu', (err, universidad) => {
		//conn.query('select * from univerdidad', (err, universidad) => {
			if(err){
				res.json(err);
			}
			res.render('uniView_list', {
				data: universidad,
			})
		})
	})
}
control.insertar = (req, res) => {
	const data = req.body;

	req.getConnection((err, conn) => {
		conn.query('insert into univerdidad set ?', [data], (err, universidad) => {
			console.log('universidad');
			res.redirect('/list');
		})
	})
}


control.ventanaSave = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('select id, nom from persona', (err, persona) => {
			res.render('uniView_add', {
				data: persona,
			})
		})
	})
}//*/

control.save = (req, res) => {
	const data = req.body;

	req.getConnection((err, conn) => {
		conn.query('insert into univerdidad set ?', [data], (err, universidad) => {
			res.redirect('/list')
		})
	})
}

module.exports = control;