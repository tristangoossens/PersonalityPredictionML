import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import router from './routes/index.mjs';

// Load environment variables
dotenv.config();

// Create an app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(path.resolve(), 'src', 'views'));

// Serve static files
app.use(express.static(path.join(path.resolve(), 'public')));

// Use the router
app.use('/', router);

// Start the server on specified address and port
const server = process.env.SERVER || 'http';
const host = process.env.HOST || 'localhost';
const port = 3000;

app.listen(port, () => {
    console.log(`Good app started on ${server}://${host}:${port}`);
});