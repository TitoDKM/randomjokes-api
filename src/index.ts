import * as dotenv from 'dotenv';
import express from 'express';
import jokeRouter from './routes/joke';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string);
const app = express();

app.use(express.json());

app.use('/api/joke', jokeRouter);

app.get('/', (req, res) => {
    res.status(200).json({"message": "Welcome to Random Jokes API :D"});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});