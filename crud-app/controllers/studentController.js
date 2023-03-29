const asyncHandler = require("express-async-handler")
const Student = require("../models/studentModel")


// @desc    Get goals
// @route   GET /api/students
// @access  Private

const getStudents = asyncHandler (async (req,res) => {
    const students = await Student.find()
    res.status(200).json(students);
})


const registerStudent = asyncHandler (async (req, res) => {
    const {name, email,age ,rollNo} = req.body
    if (!name || !email || !age || !rollNo){
        res.status(400)
        throw new Error("Please add all the fields ")
    }

    // check if user exists 
    const studentExists = await Student.findOne({email})
    if (studentExists){
        res.status(400)
        throw new Error("User with this email already exists ")
    }

    // create student 
    const student = await Student.create({
        name, age, email, rollNo 
    })


    if (student) {
        res.status(201).json({
          _id: student.id,
          name: student.name,
          age : student.age,
          email: student.email,
          rollNo : student.rollNo
        })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }

    res.status(200).json({message : "New student added"})
})  


const updateStudent = asyncHandler (async (req,res) => {
    const student = await Student.findById(req.params.id)

    if(!student){
        res.status(400)
        throw new Error(`Student with ${req.params.id} not found`)
    }

    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    
      res.status(200).json(updatedStudent)
})

const deleteStudent = asyncHandler (async (req,res) => {
    const student = await Student.findById(req.params.id)

    if (!student) {
      res.status(200).json({
        message : `student with id ${req.params.id} not found `
      })
    // throw new Error('Student not found')
    }
  
    await Student.findByIdAndRemove(req.params.id)


    res.status(200).json({ 
        id: req.params.id,
        message : "Record is deleted "
     })

})

module.exports = {
    getStudents, registerStudent, updateStudent, deleteStudent
}