const mongoose = require('mongoose');

var schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    RegNo:Number
})

var StudentModel=mongoose.model("student",schema)
module.exports=StudentModel