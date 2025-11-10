const express = require('express');
const app = express();
const router = express.router();

router.get('/', (req,res) =>{
    res.send("post list");
});

router.get('/new', (req,res) =>{
    res.send("new post form");
});

module.exports = router;