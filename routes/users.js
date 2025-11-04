const express =require('express');
const app = express(); //calling this function sets up a server

const router = express.Router();


router.get('/', (req,res)=>{
    res.send("user list");
});

router.get('/new', (req,res)=>{
    res.send("new user form");
});

module.exports = router;