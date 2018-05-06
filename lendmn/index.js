var express = require("express"),
    app  = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/lendmn");

var lendmnSchema = new mongoose.Schema({
    title: String,
    img: String,
    desc: String
});

var Lendmn = mongoose.model("Lendmn", lendmnSchema);

var news = [{title: "Title1", img: "https://1.bp.blogspot.com/-OxHVKRDIpk4/WtCHayG7kvI/AAAAAAAAAjU/BvGokemENN0Bj2Mg9TrPs-6geplYwFlBgCLcBGAs/s1600/29954982_10214866102341824_1502572961_o.jpg",desc:"Description"},
{title: "Title2", img: "https://1.bp.blogspot.com/-OxHVKRDIpk4/WtCHayG7kvI/AAAAAAAAAjU/BvGokemENN0Bj2Mg9TrPs-6geplYwFlBgCLcBGAs/s1600/29954982_10214866102341824_1502572961_o.jpg",desc:"Description"}];

app.get("/",function(req,res){
    
    Lendmn.find({}, function(err, allPost){
        if(err){
            console.log(err);
        } else {
            res.render("index.ejs", {posts: allPost});
            
        }
    });
});

app.get("/addNews",function(req,res){
    res.render("addNews.ejs");
});

app.post("/addNews",function(req,res){
    

    var name = req.body.post_title;
    var image = req.body.post_img;
    var desc = req.body.post_desc;
    var newPost = {title: name, img: image, desc: desc};
    Lendmn.create(newPost, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});


app.get("/p/:id", function(req, res){
    Lendmn.findById(req.params.id, function(err, foundPost){
        if(err){
            console.log(err);
        } else {
            res.render("show.ejs", {post: foundPost});
        }
    });
});
//process.env.PORT
app.listen(process.env.PORT ||3000,function(){
    console.log("Server aslaa");
});
