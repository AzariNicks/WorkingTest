const { addPage } = require("./controller.js");
const { FILEPASSCODE } = require(`./code.js`);
const { UsersList, ConsumersList } = require(`./tempData.js`);

const express = require("express");
const cors = require("cors");
const path = require("path");
const { createHash } = require("crypto");
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());
// Starter Stuff really
app.get("/consumerData", (req, res) => {
  res.send(ConsumersList);
});
app.get("/consumerDataName" , (req,res) => {
 consumerName = req.query.body
 if(req.query.body!=""){
 ConsumersList.forEach((ele,ind)=>{
  if( consumerName == ele.fullName){
    res.send(ele)
  }
})


}

})
app.get("/userData", (req, res) => {
  res.send(UsersList);
});

addPage("addLogPage", "addLogPage", "addLog", app);
addPage("addConPage", "addConPage", "addCon", app);

app.listen(PORT, () => {
  console.log("Running On Port 8080")
  console.log(`www.localhost:${PORT} `);
});
