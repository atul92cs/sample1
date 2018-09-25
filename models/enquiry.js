const mongoose=reuquire('mongoose');

const enquirySchema=mongoose.Schema({
id:mongoose.Schema.Types.ObjectId,
name:String,
phone:String,
email:String,
enquiry:String
    
});

module.exports=mongoose.model('Enquiry',enquirySchema);