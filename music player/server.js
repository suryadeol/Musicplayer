var express=require('express');
var app=express();
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://127.0.0.1:27017/AIDS", { useNewUrlParser: true},{useUnifiedTopology: true});

const nodes={
	name:String,
	email:String,
	Rate:Number,
	feel:String,
	suggestions:String
}

const songs=mongoose.model("songs",nodes);
app.get('/',function (request,res){
	res.sendFile(__dirname +"/wlcm.html" ); 
})

app.post("/",function(req,res){

	let newob = new songs({
	
		name:req.body.name,
		email:req.body.email,
		Rate:req.body.rate,
		feel:req.body.feel,
		suggestions:req.body.sugg,

	});
	newob.save();
	res.send("THANK YOU FOR LISTENING......");
	
})
var server=app.listen(8000,function(){
	console.log("listening");
});