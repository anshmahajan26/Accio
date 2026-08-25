const express = require("express");
const mongoose = require("mongooose");
const cors = require ("cors");

app.use(express.json());

const user =  new mongoose.Schema({
    Input: String,
    History: [String],
    Future:[String]
})











app.listen ("8080",()=>{
    console.log("Yes i am listening");
})