// we got some cl to shorten how long were typing cl.log for instead 

const axios = require('axios')
const express = require('express')
const cors = require('cors')
const path = require('path')
// these are our imports from depencies 

const app = express()
// this is activating it letting us use its stuff 
//const PORT = process.env.PORT || 8080;
 const PORT = 8080; 
// port name 

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/test.html'))
 });
 app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '/test.js'))
 });
 app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, '/test.css'))
 });



app.listen(PORT, () => { 
    
  
    console.log(`running on port ${PORT}
heres a cute copy paste so its easy to get to
 www.localhost:${PORT} `)})
 module.exports = app;
console.log(`                        www.localhost:${PORT}`)