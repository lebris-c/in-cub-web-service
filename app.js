const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const expressJwt = require('express-jwt');

const consultantRouter = require('./src/routes/consultant');
const startupRouter = require('./src/routes/startup');
const indexRouter = require('./src/routes/index');

let app = express();

const urlmongo = "mongodb://localhost:27017/inCub";
mongoose.connect(urlmongo, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function () {
    console.log("Connexion à la base OK");
});

const mySecret = 'my_secret';
app.use(expressJwt({secret: mySecret}).unless({path: ['/register','/login']}));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/consultant', consultantRouter);
app.use('/startup', startupRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
