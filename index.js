const express = require('express')
require("./connection")
var StudentModel=require("./model/student")

var app= express();

app.use(express.json());

// api creation
app.post('/add',async(req,res)=>{
    try {
        await StudentModel(req.body).save()
        res.send({message:"Data Added!!"});
    } catch (error) {
        console.log(error);
    }
})


app.get('/view',async(req,res)=>{
    try {
       const data = await StudentModel.find()
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})



app.delete("/del/:id",async(req,res)=>{
    try {
        await StudentModel.findByIdAndDelete(req.params.id)
        res.send("Data deleted");
    } catch (error) {
        console.log(error);
    }
})



app.put('/up/:id',async(req,res)=>{
    try {
       const update= await StudentModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("Data Updated!!");
    } catch (error) {
        console.log(error);
    }
})


app.listen(4419,()=>{
    console.log("port is running");
});