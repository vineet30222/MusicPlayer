var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=Schema(
    {    trackEmail:{type:String ,required:true,unique:false },
        trackName:{type:String ,required:true },
        trackPreview:{type:String,},
        trackSpotify:{ type: String,required:true,unique:false},
    }
)
userSchema.index({ trackEmail: 1, trackSpotify: 1 }, { unique: true });
module.exports=mongoose.model('Playlist',userSchema);
