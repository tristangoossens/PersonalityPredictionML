// Router
import express from 'express';
const router = express.Router();

// Services
import * as dataService from '../services/dataService.mjs';


router.get('/', async (req, res) => {
    const data = await dataService.getData();
    res.render('index', { title: 'Pug Template', data: data});
});

export default router;
