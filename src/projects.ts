import { Router } from 'express';
import db from './lib/projects.js';
const router = new Router();

router.get('/', (req, res) => {
	db.find({}, (err, docs) => {
		console.log(err, docs);
		if(err) throw err;
		res.json(docs);
	});
});

export default router;