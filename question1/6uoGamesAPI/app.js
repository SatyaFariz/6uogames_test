var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes');
var loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/login', loginRouter);

app.all('*', (req, res) => {
	res.status(404).send({message: 'Command not found'});
});

module.exports = app;