const controller = {};

controller.list = (req, res) => {
	//res.send('Hola');
	req.getConnection((err, conn) => {
		conn.query('select * from persona', (err, persona) => {
			if(err){		//mostrar el error, en caso de haber
				res.json(err);
			}
			res.render('perView_list', {
				data: persona,
			});
		});
	});//*/
};

controller.save = (req, res) => {
	const dat = req.body;

	req.getConnection((err, conn) => {
		conn.query('insert into persona set ?', [dat], (err, persona) => {
			console.log(persona);
			res.redirect('/');		//redireccioname a la ruta inicial
		});
	});
}

controller.delete = (req, res) => {
	const { id } = req.params;
	//const data = req.params.id;
	req.getConnection((err, conn) => {
		conn.query('DELETE FROM persona WHERE id = ?', [id], (err, persona) => {
			res.redirect('/');
		});
	});
}

controller.update = (req, res) => {
	const { id } = req.params;
	req.getConnection((err, conn) => {
		conn.query('select * from persona where id = ?', [id], (err, persona) => {
			res.render('perView_edit', {
				data: persona[0]
			})
		})
	})
}

controller.edit = (req, res) =>{
	const { id } = req.params;
	const data = req.body;
	req.getConnection((err, conn) => {
		conn.query('update persona set ? where id = ?', [data, id],(err, persona) => {
			res.redirect('/');
		})
	})
}

module.exports = controller;
