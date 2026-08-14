const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const cors = require("cors");

//middelware to handle http request data
app.use(express.json());
//mongoSchema
const counter = new mongoose.Schema({
    count: Number,
    name:String
})
const Counter = mongoose.model("Counter",counter);
//mongo connection
//! we can add it using async function also
async function dbConnect(){
 try{
    await mongoose.connect("mongodb://localhost:27017/new1");
    console.log("DB connected");
 }catch(e){
    console.log("DB connection issue");
 }
}
dbConnect();

app.post("/",async (req,res)=>{
    const cdb = await Counter.create(req.body);
    res.send(cdb);
    
});

app.get("/history", async (req, res) => {
    const gdb = await Counter.find();
    res.send(gdb);
});

app.delete("/history/:id",async(req,res)=>{
    try{
        const id = req.params.id;
         const ddb = await Counter.findByIdAndDelete(id);
          if (!ddb) {
            return res.status(404).send("Counter not found");
        }
          res.send("deleted");
    }catch(e){
        console.log(e);
    }   
});



app.listen("8080",()=>{
    console.log("port is listening");
});
