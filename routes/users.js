var mongoose=require('mongoose');
var User=require('../models/user');
var express=require('express');
var passport=require('passport');
var localStrategy=require('passport-local').Strategy;
var bcrypt=require('bcrypt-nodejs');
var router=express.Router();
router.post('/register',function(req,res){
	
	var username=req.body.username;
	var email=req.body.email;
	var password=req.body.password;
	var record=new User()
	record.username=username;
	record.email=email;
	record.password=record.hashPassword(password);
	record.save(function(err,user){
		if(err)
		{
			var msg = err;
			
			res.redirect('/register',);
			
		}
		else
		{
			
			res.redirect('/success');
		}
		
	})
	
});
 passport.serializeUser(function (user, done) {
        done(null, user);
    })
    passport.deserializeUser(function (user, done) {
        done(null, user);
    })
passport.use(new localStrategy(function(username,password,done){
	User.findOne({username:username},function(err,doc){
		if(err)
		{
			done(err)
		}
		else
		{		
	         if(doc){
				 var valid=doc.comparePassword(password,doc.password);
				 if(valid)
				 {
					 done(null,{
						 username:doc.username,
						 
					 })
				 }else
				 {
					 done(null,false)
				 }
			 }else{
				done(null,false) 
			 }
			 
		}	

		})
}))
router.post('/login',passport.authenticate('local',{successRedirect:'/success',failureRedirect: '/login',failureFlash: false}),function(req,res){
	res.send('login successful');
});
module.exports=router;
