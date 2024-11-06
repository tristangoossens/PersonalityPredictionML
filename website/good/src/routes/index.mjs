// Router
import express from 'express';
const router = express.Router();

// Services
import * as quizService from '../services/quizService.mjs';

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/personalities', async (req, res) => {
    const allPersonalityData = quizService.getPersonalityList();
    res.render('personalities', { 
        analysts: allPersonalityData.slice(0, 4),
        diplomats: allPersonalityData.slice(4, 8),
        sentinels: allPersonalityData.slice(8, 12),
        explorers: allPersonalityData.slice(12, 16)
    });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/quiz', async (req, res) => {
    res.render('quiz_form');
});

router.post('/quiz/start', async (req, res) => {
    res.redirect('/quiz/play?questionCount=' + req.body.questionCount);
});

router.get('/quiz/play', async (req, res) => {
    const quizData = await quizService.getData(req.query.questionCount || 60);
    res.render('quiz', { questions: quizData.questions });
});

router.post('/quiz/submit', async (req, res) => {
    const answers = req.body;
    const prediction = await quizService.submitData(answers);
    res.render('results', { personality_data: quizService.getPersonalityData(prediction.prediction), plot: prediction.plot, confidence: prediction.confidence });
});

export default router;
