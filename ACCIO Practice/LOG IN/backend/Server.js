const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());

const user = new mongoose.Schema({
    username:String,
    password: String
});
const Logger = mongoose.model("Logger",user);

const auth = (req,res,next)=>{
    console.log("middleware running");
    next();
}

app.post("/",auth,async(req,res)=>{
    try{
    const udb =await Logger.create(req.body);
    res.send(udb);
    }catch(e){
        console.log("Server error");
    }
});
app.get("/", async(req,res)=>{
    try{
        const gdb = await Logger.find();
        res.send(gdb);
    }catch(e){
        console.log("Server error");
    }
});
app.listen("8080",()=>{
    console.log("you are on port 8080");
})
