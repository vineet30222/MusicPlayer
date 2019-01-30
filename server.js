var express=require('express');
var path=require('path');

//var session=require('express-session');
var mongoose=require('mongoose');

var bodyparser=require('body-parser');


//var alert=require('alert-node');
var url="mongodb://localhost:27017";
var cors=require('cors');

var listRoutes=require('./server/routes/playlist');
var UserRoutes=require('./server/routes/user');
var router=express.Router();

var db=mongoose.connection;



var app=express();
app.use(cors());
mongoose.connect('mongodb://localhost:27017/Music',{
    useCreateIndex: true,
    useNewUrlParser: true
  });
//var db=mongoose.connection;
// app.use(express.static(path.join(__dirname,'dist')));
// app.get('*',(req,res)=>
// {
// res.sendFile(path.join(__dirname,'dist/index.html'))
// });

app.use(bodyparser.json());
var present;
app.use('/playlist',listRoutes);
app.use('/signup',UserRoutes);

app.use('/',UserRoutes);



const port=process.env.PORT || 3000;
app.listen(port,(req,res)=>
{
console.log(`Running in port ${port}`);
});