require('dotenv').config();
//dotenv.config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require ('cors');
// const pool =require ('./client');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cityRouter= require('./routes/cities');
const restaurantRouter=require('./routes/restaurants');
const tagRouter =require('./routes/tags')

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cities', cityRouter);
app.use('/restaurants', restaurantRouter);
app.use('/tags', tagRouter);

module.exports = app;
