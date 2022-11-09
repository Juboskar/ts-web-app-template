import express from 'express';
const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
    res.json('pong');
});

export default app;
