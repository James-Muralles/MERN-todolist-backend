import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {connect} from 'mongoose';
import bodyParser from 'body-parser';
const PORT = 4000;

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log("server is running on port: " + PORT)
});



