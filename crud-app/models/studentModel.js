const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please add a name"]
    },
    email : {
        type : String,
        required : [true, "Please add an email"],
        unique : true,
    },
    age : {
        type : Number,
        required : [true, "Please add an age"]
    },
    rollNo : {
        type : String ,
        required : [true, "Please add a rollNo"]
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Student", studentSchema)