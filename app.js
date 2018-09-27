var express = require('express');
var bodyParser = require('body-parser');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var multer = require('multer');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var port = process.env.port || 8080;
var passport = require('passport');
var mongoose = require('mongoose');
var path = require('path');
var routes = require('./routes');
var userFunction = require('./routes/users');
/*var userFunction = require('./routes/function');*/
const app = express();
var db = mongoose.connect('mongodb://atul_92:savita92@ds259912.mlab.com:59912/sample_website_db', {
    useNewUrlParser: true
});
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "cats",
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize())
app.use(passport.session())
app.get('/', routes.login);
app.get('/register', routes.register);
app.get('/admin', routes.admin)
app.post('/login', userFunction);
app.post('/register', userFunction);

app.listen(port, function () {
    console.log('server started on' + port);
});
