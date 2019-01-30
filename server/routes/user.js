var express=require('express');
var router=express.Router();
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
var User=require('../../model/signup');
var bodyparser=require('body-parser');

///for Signup

router.post('/',(req,res,next)=>
{
    var user=new User({
     name:req.body.name,
     email:req.body.email,
     password:bcrypt.hashSync( req.body.password,10)
    });
    user.save((err,user)=>
    {
        if(err)
        {
            console.log("Error2 Started ");
        return res.status(500).json({
            title:'An error occured',
            error:err
        });
        }
        console.log("Already Started ");
        res.status(201).json({
            message:'Saved messages',
            obj:user
        });
    });
});
/// for Signin 
router.post('/signin',(req,res,next)=>
{
    var password=req.body.password;
    User.findOne({
        email:req.body.email
       },(err,user)=>
    {
        if(err)
        {
            console.log("there is error in adding user");
            res.send({success:"Failed to add user",status:500});
        }
        if(!user)
        console.log("username or password is wrong");
        else
        if(!bcrypt.compareSync(password,user.password))
        {
            console.log('wrong password');
            return res.status(401).json({
               tilte:'Login failed',
               error:{message:'Invalid login credentials'}
            });
        }
        var token=jwt.sign({user:user},'akash',{expiresIn:7200});
        //  console.log(token);
        
          res.status(200).json({
              message:'Successfully Logged in',
              token:token,
              userId:user._id,
              userName:user.name,
              email:user.email
          });
        
      
    });
});
module.exports=router;