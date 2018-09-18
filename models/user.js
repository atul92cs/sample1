const mongoose=require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var userSchema=mongoose.Schema({
     id:mongoose.Schema.Types.ObjectId,
     email:String,
	 username:String,
	 password:String
})



userSchema.methods.hashPassword=function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}
userSchema.methods.comparePassword=function(password,hash){
	return bcrypt.compareSync(password,hash)
   	
}
module.exports=mongoose.model('users',userSchema,'users');