const mongoose=require('mongoose');

const applicationSchema=mongoose.Schema({
   id:mongoose.Schema.Types.ObjectId,
   name:String,
   email:String,
   phone:String,
   position:String
});

module.exports=mongoose.model('Application',applicationSchema);
