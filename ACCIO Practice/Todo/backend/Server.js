const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require ("cors");


app.use(cors());
app.use(express.json());

const todoSchema = new mongoose.Schema({
task:String
})
const todo = mongoose.model("todo",todoSchema);
//mongo connection
const connectDB = async ()=>{
    try{
       await mongoose.connect ("mongodb://localhost:27017/todoDB");
       console.log("DB conncected");
    }catch(e){
        console.log("error in connection in Database");
    }
}
connectDB();
//task loading to db
app.post("/", async(req,res)=>{
    const tdb = await todo.create(req.body);
    
    res.send(tdb);
});
//task fetch from db
app.get("/",async(req,res)=>{
     const todos = await todo.find();
    res.send(todos);
})
//edit task fetch and show
app.put("/Edit/:id", async(req,res)=>{
    const etd = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
     res.send(etd);
})

//delete task
app.delete("/:id", async(req,res)=>{
    const dtd = await todo.findByIdAndDelete(req.params.id)
    res.send("task deleted");
});

app.listen("8080",()=>{
    console.log("port is listning to port 8080");
});