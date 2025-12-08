const express = require(`express`);
const userRouter = require(`./routes/users`);
const postRouter = require(`./routes/posts`);

const app = express();

app.set("view engine", "ejs"); //telling express to use ejs as the view engine
app.use(express.static('public')); //telling express to use the public folder for static files
app.use(express.urlencoded({extended: true})); //middleware to parse form data

// app.use(logger);

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req,res)=>{
    console.log("Here");
    res.render("index", {user: "Chris"});
});

app.listen(3030); //listening on port 3030 // localhost:3030

function logger(req,res,next){
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
}
