var express=require('express');
var router=express.Router();
var List=require('../../model/playlist');
var Playlist=require('../../model/playlist');
var bodyparser=require('body-parser');
console.log("err");
router.post('/add',(req,res,next)=>
{
    console.log("err");
    var list=new Playlist({
        trackEmail:req.body.trackEmail,
       
        trackName:req.body.trackName,
        trackPreview:req.body.trackPreview,
        trackSpotify:req.body.trackSpotify
    });
    console.log(list);
    list.save((err,user)=>
    {
        if(err)
        {
            console.log("Error2 Started ");
        return res.status(201).json({
            title:'An error occured',
            error:err,
            added:false
        });
        }
      
        res.status(201).json({
            message:'Saved list',
            obj:user,
            added:true
           
        });
    
       
    });
})

router.post('/get',(req,res,next)=>
{
    var search={trackEmail:req.body.trackEmail};
    Playlist.find(search,(err,result)=>
    {
      if(err)
      {
          console.log("Something is wrong");
      }
      if(result)
      {
     res.status(200).json({
     message:'playlists',
     result:result
        });
       }
    });
})
router.post('/delete',(req,res,next)=>
{
    var del ={trackEmail:req.body.trackEmail,trackName:req.body.trackName};
    Playlist.findOneAndDelete(del,(err,result)=>
    {
        if(err)
        {
            console.log("Something is wrong");
        }
        if(result)
        {
            res.status(200).json({
                message:'deleted',
                result:result
                   });
        }
    })
})
module.exports=router;