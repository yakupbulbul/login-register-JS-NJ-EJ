const express = require('express');
const router = express.Router();


router.get("/", (reg, res)=> {
    // res.send("<h1> Home Page </h1>")
    res.render('index')
});
router.get("/register", (reg, res)=> {
    // res.send("<h1> Home Page </h1>")
    res.render('register')
});
router.get("/login", (reg, res)=> {
    // res.send("<h1> Home Page </h1>")
    res.render('login')
});

module.exports = router; 

