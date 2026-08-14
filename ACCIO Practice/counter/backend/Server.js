const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

//mongoSchema
const counter = new mongoose.Schema({
    count: Integer,
})
const Counter = mongoose.model("Counter",counter);
//mongo connection
mongoose.connect("mongodb://localhost:27017/new1");


app.get("/",(req,res)=>{
    res.send("hello");
});

app.listen("8080",()=>{
    console.log("port is listening");
});