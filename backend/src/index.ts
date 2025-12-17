import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import authRouter from './routes/auth.route';
import userRouter from './routes/user.route';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));


app.get('/', (_req, res) => {
    res.send("Hello from Backend.")
})


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);


app.listen(PORT, () => {
    console.log(`🚀 App listening to PORT ${PORT}`);
})