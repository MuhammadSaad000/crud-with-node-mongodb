const express = require("express")
const router = express.Router()

const {
    getStudents, 
    registerStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController")

router.route('/').get(getStudents).post(registerStudent)
router.route('/:id').delete(deleteStudent).put(updateStudent)


module.exports = router