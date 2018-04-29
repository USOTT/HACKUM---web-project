var express = require("express");
var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.send("Hi");
});

app.get("/profile/:username",function(req,res){
    res.render("index",{name:req.params.username});
});



app.get("/profile/:name/:age",function(req,res){
    res.send("<b>Hi </b>"+"<em>"+req.params.name+"</em>"+req.params.age);
});

app.get("/speak/:sound",function(req,res){
    var sound = {
        dog: "woof woof",
        cat: "meow meow"
    }
    var animal = req.params.sound;
    res.send(sound[animal]);
    
});

app.get("/zurag",function(req,res){
    res.render("index");
});

app.get("/ner/:text",function(req,res){
    var text= req.params.text;
    res.render("ner",{textNer:text});
});

 var array = [
        {name: "Paddington", level : 5},
        {name: "Temujin", level: 10},
        {name: "Jamuh", level: 10}];
        
app.get("/friend",function(req,res){
    res.render("friends",{friends:array});
});
app.post("/friend",function(req,res){
    var nFriend = {name: req.body.fname, flevel: Number(req.body.flevel)};
    array.push(nFriend);
    res.redirect("zurag");
});

app.listen(process.env.PORT,function(){
    console.log("Hi ajillaj bna");
});