const express = require('express');
const app = express(); //calling this function sets up a server

const router = express.Router();

router.get('/', (req,res)=>{
    res.render("users/list", {users: users});
});

router.get('/new', (req,res)=>{
    res.render("users/new"), {firstName: ""};
});

router.post('/', (req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const gender = req.body.gender;

    const isValid = firstName !=="" && lastName !=="";
        
    if(isValid){
        console.log(`Adding new user...${firstName}`);
        users.push({
            name: firstName,
            lastName: lastName,
            gender: gender,
            age: age,  
        });
        console.log(`New set of Users: ${users}`);
        res.send("users created!");
    }else{
        console.log("Error adding user!")
        res.render("users/new", {firstName: firstName});
    }
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


const users = [
    {
    firstName: "Chris",
    lastName: "Shavuo",
    age: 21,
    gender: "Male"
    }
];

router.param("id", (req,res,next,id)=>{
    console.log(`accessing user id: #${id}`);
    next();
});


module.exports = router;
