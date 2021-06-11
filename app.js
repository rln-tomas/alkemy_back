require('dotenv').config(); 
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session'); 
const cors = require('cors'); 

const { userRouter, transactionRouter } =
require('./api/routes');

const app = express();

const sess = {
	name: process.env.SESSION_NAME, 
	secret: process.env.SECRET_KEY,
	resave: false, 
	saveUninitialized: true,
	cookie: {
		sameSite:true,
		maxAge: parseInt(process.env.COOKIE_AGE),
	}
};

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));


app.use('/users', userRouter);
app.use('/transactions', transactionRouter); 


module.exports = app;
