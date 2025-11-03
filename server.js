const express =require('express');
const app = express(); //calling this function sets up a server

app.set("view engine", "ejs"); //telling express to use ejs as the view engine

app.get('/', (req,res)=>{
    console.log('Here');
    res.render("index", {user: "George"});
});

app.get('/user', (req,res)=>{
    res.send("user list");
}

app.get("/users/new", (req,res)=>{
    res.send("new user form");
}



app.listen(3030); //listening on port 3030 // localhost:3030

