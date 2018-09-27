var mongoose=require('mongoose');
var User=require('../models/user');
var express=require('express');
var passport=require('passport');
var localStrategy=require('passport-local').Strategy;
var bcrypt=require('bcrypt-nodejs');
var router=express.Router();
router.post('/register',function(req,res){
	
	
	var email=req.body.email;
	var password=req.body.password;
	var record=new User();
	
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
			
			res.send('success');
		}
		
	})
	
});
 passport.serializeUser(function (user, done) {
        done(null, user);
    })
    passport.deserializeUser(function (user, done) {
        done(null, user);
    })
passport.use(new localStrategy(function(email,password,done){
	User.findOne({email:email},function(err,doc){
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
						 email:doc.email
						 
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

router.post('/login',passport.authenticate('local',{successRedirect:'/admin',failureRedirect: '/',failureFlash: false}),function(req,res){
	res.send('login successful');
});
router.post('/update',function(req,res){
	
});
router.delete('/delete/:id',function(req,res){
	
});
module.exports=router;