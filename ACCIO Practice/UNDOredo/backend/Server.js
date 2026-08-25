const express = require("express");
const mongoose = require("mongooose");
const cors = require ("cors");

app.use(express.json());

const user =  new mongoose.Schema({
    Input: String,
    History: [String],
    Future:[String]
});

const User = mongoose.model("User",user);


app.get("/editor", async (req, res) => {

  const data = await User.findOne();
//get the data here.
  res.json(data);
});



app.post("/editor", async (req, res) => {

  const { input, history, future } = req.body;

  const data = new Editor({
    input: input,
    history: history,
    future: future
  });

  await data.save();

  res.json(data);
});






app.listen ("8080",()=>{
    console.log("Yes i am listening");
})