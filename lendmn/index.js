var express = require("express");
var app  = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var news = [{title: "Title1", img: "https://1.bp.blogspot.com/-OxHVKRDIpk4/WtCHayG7kvI/AAAAAAAAAjU/BvGokemENN0Bj2Mg9TrPs-6geplYwFlBgCLcBGAs/s1600/29954982_10214866102341824_1502572961_o.jpg",desc:"Description"},
{title: "Title2", img: "https://1.bp.blogspot.com/-OxHVKRDIpk4/WtCHayG7kvI/AAAAAAAAAjU/BvGokemENN0Bj2Mg9TrPs-6geplYwFlBgCLcBGAs/s1600/29954982_10214866102341824_1502572961_o.jpg",desc:"Description"}];

app.get("/",function(req,res){
    res.render("index.ejs",{posts:news});
});

app.get("/addNews",function(req,res){
    res.render("addNews.ejs");
});

app.post("/addNews",function(req,res){
    var garchig = req.body.post_title;
    var zurag = req.body.post_img;
    var desciption = req.body.post_desc;
    var newPost= {title: garchig, img:zurag ,desc:desciption};
    news.push(newPost);
    res.redirect("/");
});

//process.env.PORT
app.listen(process.env.PORT ||3000,function(){
    console.log("Server aslaa");
});
