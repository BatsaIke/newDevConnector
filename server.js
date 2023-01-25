const express = require('express')

const app =express()

const PORT =process.env.PORT||5100
app.get('/',(req,res)=>res.send("Api is running"))

app.listen(PORT,()=>console.log(`Servver is listening on port: ${PORT}`))