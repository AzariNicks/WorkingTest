const axios = require('axios')
class ConsumerData {
    constructor(uniqueId,fullName,homeAddress,arrivalPoint){
        this.uniqueId = uniqueId
        this.fullName = fullName
        this.homeAddress = homeAddress
        this.arrivalPoint = arrivalPoint
    }
    get FullName() {
        return this.firstName + " " + this.lastName
    }
}
let ConsumersList = []

const consumer1 = new ConsumerData("ROAD456789", "Greg James", "100 Livingston Ave", "25-35 Beechwood Ave, Mt.Vernon NY 10553")
const consumer2 = new ConsumerData("ROA323233", "James Greg", "Some Address Ave", "25-35 Beechwood Ave, Mt.Vernon NY 10553")

ConsumersList.push(consumer1)
ConsumersList.push(consumer2)

const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const PORT = 8080; 
app.use(express.json())
app.use(cors())
// Starter Stuff really 
app.get('/consumerData' , (req,res) => {
    res.send("NOT ALLOWED")
    console.log(ConsumersList)})
app.listen(PORT, () => { 
    
  
    console.log(`running on port ${PORT}
heres a cute copy paste so its easy to get to
 www.localhost:${PORT} `)})