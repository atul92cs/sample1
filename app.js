var express=require('express');
var bodyParser=require('body-parser');
var aws=require('aws-sdk');
var multers3=require('multer-s3');
var multer=require('multer');
var session=require('express-session');
var cookieParser=require('cookie-parser');
var port =process.env.port||8080;
var passport=require('passport');
var mongoose=require('mongoose');

const app=express();
var db =mongoose.connect('mongodb://atul_92:savita92@ds259912.mlab.com:59912/sample_website_db',{ useNewUrlParser: true });
app.listen(port,function(){                                /* starting the app*/
    console.log('server started on '+ port);
});
