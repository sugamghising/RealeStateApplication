import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));


app.get('/', (req, res) => {
    res.send("Hello from Backend.")
})

app.listen(PORT, () => {
    console.log(`App listening to PORT ${PORT}`);
})