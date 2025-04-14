const express = require('express')
const app = express()
const port = 3000

app.get('/' , (req , res) => {
    // res.send('<h1>hello world sss sss !</h1>')
    res.sendFile("./views/home.html" , {root:__dirname})

})

app.listen(port , () => {
    console.log(`Example app listening on port ${port} on server http://localhost:${port}/`)
})  