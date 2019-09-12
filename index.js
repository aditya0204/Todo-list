const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    res.render("index.ejs");
})


const PORT = 5000||process.env.PORT;
app.listen(PORT,(req,res)=>{
   console.log(`Server listening at ${PORT}`);
})
