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
    res.render('quiz_form');
});

router.post('/quiz/start', async (req, res) => {
    req.session.user = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        password: req.body.password
    };

    res.redirect('/quiz/play?questionCount=' + req.body.questionCount);
});

router.get('/quiz/play', async (req, res) => {
    const quizData = await quizService.getData(req.query.questionCount || 60);
    res.render('quiz', { questions: quizData.questions });
});

router.post('/quiz/submit', async (req, res) => {
    const answers = req.body;
    const prediction = await quizService.submitData(answers);
    const user = req.session.user || { name: 'jfifi', email: 'jfifi', age: 'jfifi', password: 'jfifi' };

    res.render('results', { personality_data: quizService.getPersonalityData(prediction.prediction), user: user });
});

export default router;
