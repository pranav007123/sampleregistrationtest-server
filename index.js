require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')

require('./DB/connection')

const testServer = express()

testServer.use(cors())
testServer.use(express.json())
testServer.use(router)

const PORT = 3000 || process.env.PORT

testServer.listen(PORT,()=>{
    console.log(`test server started at port :${PORT}`);
})
testServer.get("/",(req , res)=>{
res.status(200).send(`server started waiting for client request`)
})

testServer.post("/",(req , res)=>{
    res.status(200).send(`POst request`)
    })