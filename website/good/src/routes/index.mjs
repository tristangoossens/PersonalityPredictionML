// Router
import express from 'express';
const router = express.Router();

// Services
import * as quizService from '../services/quizService.mjs';

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/quiz', async (req, res) => {
    const quizData = await quizService.getData();
    
    res.render('quiz', { questions: quizData.questions });
});

export default router;
