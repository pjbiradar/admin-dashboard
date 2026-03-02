
const express = require('express')


//creating app for 
const app = express();


//middle ware :runs before the route match and parses json body
app.use(express.json())

//basic route
app.get("/",(req,res)=>{
    res.send("Admin Dashboard running in backend")
})

module.exports = app;
