const express = require("express");
const cors = require("cors");
const apiData = require("./data.json");
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());


app.get("/", (req, res) => {
  res.send("iHDSreamHub API is Live");
});

app.get("/service",(req, res)=>{
    res.send(apiData);
})

app.listen(port,()=>{
    console.log("iHDSreamHub API is Liv One More Time");
});