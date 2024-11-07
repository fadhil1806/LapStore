var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const { PORT } = process.env

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var productCategoriesRouter = require('./routes/product_categories');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', productCategoriesRouter);

app.listen(PORT, () => console.log(`server running in ${PORT}`))
