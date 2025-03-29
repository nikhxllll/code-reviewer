const express = require('express')
const aiRoutes  = require('./router/ai.routes')
const app= express()

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.use('/ai',aiRoutes)

module.exports = app


