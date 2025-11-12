const express = require('express');
const app = express(); //calling this function sets up a server

const router = express.Router();


router.get('/', (req,res)=>{
    res.send("user list");
});

router.get('/new', (req,res)=>{
    res.send("new user form");
});

// router.get(':/id', (req,res)=>{
//     res.send(`Getting user data: ${req.params.id} `);
// });

router.get(':/id', get((req,res)=>{
    res.send(`Getting user data: ${req.params.id} `);
}).delete((req,res)=>{
    res.send(`Deleting user data: ${req.params.id} `);
}).put((req,res)=>{
    res.send(`Updating user data: ${req.params.id} `);
}));

router.param("id", (req,res,next,id)=>{
    console.log(`accessing user id: #${id}`);
    next();
});


module.exports = router;
