const express = require("express");
const cors = require("cors");
const apiData = require("./data.json");
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send('<h1 style="font-family: sans-serif; width: 100vw; height: 100vh; display: flex;justify-content: center;align-items: center;">iHDSreamHub API is Live</h1>');
});

//if(req.get('host')!=='https://www.w3schools.com'){
  //res.send('Nope');
 // return
//}

app.get("/service",(req, res)=>{
    res.send(apiData);
})

app.listen(port,()=>{
    console.log("iHDSreamHub API is Liv One More Time");
});
