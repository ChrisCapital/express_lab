const express = require(`express`);
const usersRouter = require(`./routes/users`);
const postRouter = require(`./routes/posts`);

const app = express();

app.set("view engine", "ejs"); //telling express to use ejs as the view engine
app.use('/users', userRouter);



app.get('/', (req,res)=>{
    console.log('Here');
    res.render("index", {user: "George"});
}); // this function will run when someone goes to the / route

//users routes
app.get('/user', (req,res)=>{
    res.send("user list");
});
app.get('/users/new', (req,res)=>{
    res.send("new user form");
});

//posts routes
app.get('/posts', (req,res)=>{
    res.send("post list");
});
app.get('/posts/new', (req,res)=>{
    res.send("new post form");
});

app.listen(3030); //listening on port 3030 // localhost:3030

