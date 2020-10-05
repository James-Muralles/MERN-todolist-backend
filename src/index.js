import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import {connect, connection} from 'mongoose';
// import bodyParser from 'body-parser';

require("dotenv").config();

import {notFound, errorHandler} from '../middlewares';
// import {todos} from './api/todos'
const todos = require("./api/todos");

const app = express();

connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, });

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


app.use(morgan("common"));
app.use(helmet());
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
    }
));
app.use(express.json());

app.get("/",(req,res) =>{
    res.json({
        message:"Hello World"
    })
});

app.use("/api/todos", todos);
app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
});







