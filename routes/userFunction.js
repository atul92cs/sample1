var express=require('express');
var mongoose=require('mongoose');
var Enquiry=require('../models/enquiry');
var Application=require('../models/application');
var Job=require('../models/jobs');
var router=express.Router();

router.post('/job/add',function(req,res){
    var postion=req.body.position;
    var experience=req.body.experience;
    var skills=req.body.skill;
    var location=req.body.location;
    var description=req.body.description;
    var record=new Job(
       id:new mongoose.Types.ObjectId(),
        position:postion,
        location:location,
        experience:experience,
        skills:skills,
        description:description
    );
    record.save().then(result=>{
        res.send('Success');
    }).catch(err=>{
        res.send(err);
    });
});
router.post('/job/update',function(req,res){
    let record={};
    record.position=req.body.position;
    record.experience=req.body.experience;
    record.skills=req.body.skills;
    record.location=req.body.location;
    record.description=req.body.description;
    let query={id:req.body.id};
    Job.updateOne(query,function(err){
        if(err)
            {
                res.send(err);
            }
        else
            {
                res.send('Success');
            }
    });
});
router.post('job/apply',function(req,res){
    var name=req.body.name,
    var contact=req.body.contact,
    var email=req.body.email,
    var position=req.body.postion,
    var record=new Application(
      id:new mongoose.Types.ObjectId(),
      name:name,
      email:email,
      phone:contact,
      position:position
    );
    record.save().then(result=>{
        res.send('Success');
    }).catch(err=>{
        res.send(err);
    });
});
router.delete('job/delete/:id',function(req,res){
    let query={id:req.params.id};
    Job.findById(req.params.id,function(err,Job){
        if(err)
            {
                res.send(err);
            }
        else
            {
                Job.remove(query,function(err){
                    if(err)
                        {
                            res.send(err);
                        }
                    else
                        {
                            res.sed('Success');
                        }
                });
            }
    });
});
router.post('/enquire',function(req,res){
    var name=req.body.name;
    var contact=req.body.contact;
    var email=req.body.email;
    var enquiry=req.body.eunquiry;
    var record= new Enquiry(
      id:new mongoose.Types.ObjectId(),
      name:name,
      phone:contact,
      email:email,
      enquiry:enquiry
        
    );
    record.save().then(result=>
                       {
        res.send('Success');
                               })
        .catch(err=>
               {
              res.send(err);
    }
              );
        
    });
module.exports=router;