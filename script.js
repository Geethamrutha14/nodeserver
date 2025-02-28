const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;

const comments = [
    {
        "name" : "geethamrutha",
         "comment" : "kevvu vunnavu!!!"
    },
    {
        "name" : "greeshma",
        "comment" : "mast shades vunnayi rah kamalhasan"
    },
    {
        "name" : "sanjana",
        "comment" : "raamachandra!!!"
    },
    {
        "name" : "vamsi",
        "comment" : "pogaru na oontilo vuntadhi...herorism na intlo vuntadhi"
    },
    {
        "name" : "tanmai",
        "comment" : "oo antava maava... uuu antava maava"
    },
    {
        "name" : "anime",
        "comment" : "ayyo raama!!!"
    },
    {
        "name" : "kalyan",
        "comment" : "cut out choosi konni konni nammeyali dude!!!"
    },
]

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments : comments});
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})

app.post('/comments',(req,res)=>{
    // console.log(req.body);
    const {name , comment} = req.body;
    comments.push( {name : name , comment : comment} );
    res.send("It worked!!!");
})

app.get('/tacos',(req,res)=>{
    res.send("this is a response from the server");
})

app.post('/tacos',(req,res)=>{
    // console.log(req.body);
    const {sweets , qty} = req.body;
    res.send(`Here are your ${qty} kg ${sweets}`);
})

app.listen(port,()=>{
    console.log("server started listening at the port : ",port);
})