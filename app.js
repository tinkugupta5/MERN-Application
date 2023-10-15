const express = require('express') 
const createHttpErrors = require('http-errors')
const morgan = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.get('/',(req,res,next) => {
    res.send('Working')
})
const PORT = process.env.PORT || 3000 
app.listen(PORT,()=>console.log(`🚀 on port ${PORT}`))