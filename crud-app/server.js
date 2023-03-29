const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors')

const connectDB = require('./config/db')

const port = process.env.PORT || 3000

// opening database connection 
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/students', require('./routes/studentRoutes'));


app.listen(port, () => console.log(`Server started on port ${port}`));