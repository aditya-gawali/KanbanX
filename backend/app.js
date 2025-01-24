const express = require('express');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const db = require('./connection/db');


const userRouter = require('./routes/user.router');
const boardRouter = require('./routes/board.route');
const columnRouter = require('./routes/column.route')
const cors = require('cors');
db();


const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true,              // Allow credentials
  }));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/columns', columnRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});