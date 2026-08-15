const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {Schema, model}= mongoose;
const cors = require("cors");

app.use(cors());
app.use(express.json());

//schema
const toggle = new mongoose.Schema({
    toggle : Boolean
})
const Toggle = mongoose.model("Toggle",toggle);


const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/toggle");
        console.log("DB connected");
    }catch(e){
        console.log("error in DB connecton");
    }
    
}
connectDB();



app.post("/", async (req,res)=>{
    const tdb =  await Toggle.create(req.body);
    res.send(tdb);
});

app.get("/history", async(req,res)=>{
    const hdb = await Toggle.find();
    
     res.send(hdb);
});

app.listen("8080",()=>{
    console.log("server start");
})