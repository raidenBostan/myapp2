const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/' , (req , res) => {
    // res.send('<h1>hello world sss sss !</h1>')
    res.sendFile("./views/home.html" , {root:__dirname})

})

app.listen(port , () => {
    console.log(`Example app listening on port ${port} on server http://localhost:${port}/`)
})  

mongoose.connect('mongodb+srv://raidenzed:zx2855776655@cluster0.j2apcfi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {}).catch(err => console.log(err));