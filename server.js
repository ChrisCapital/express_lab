const express =require('express');
const app = express(); //calling this function sets up a server

app.get('/', (req,res)=>{
    console.log('Here');
    res.send('Hello World');
}); // this function wil run when soemone goes to root fl






app.listen(3030); //listening on port 3030

