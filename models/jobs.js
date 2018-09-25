var mongoose =require('mongoose');

var jobSchema=mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    position:String,
    location:String,
    experience:String,
    skills:String,
    description:String,
    
});
module.exports=mongoose.model('Job',jobSchema);