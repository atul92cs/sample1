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
var path=require('path');
var route=require('./routes');
var user=require('./routes/userFunction');
const app=express();
var db =mongoose.connect('mongodb://atul_92:savita92@ds259912.mlab.com:59912/sample_website_db',{ useNewUrlParser: true });
app.set('views',__dirname+'/views');

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use(session({ secret: "cats",saveUninitialized: true,
  resave: true  }));
app.use(passport.initialize());
app.use(passport.session());
function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated())
	{
		return next();
	}else{
		res.redirect('/login');
	}
}
app.get('/',route.home);
app.get('/completedPro',route.completedProjects);
app.get('/careers',route.careers);
app.get('/login',route.login);
app.get('/register',route.register);
app.post('/job/add',user);
app.listen(port,function(){                                /* starting the app*/
    console.log('server started on '+ port);
});
