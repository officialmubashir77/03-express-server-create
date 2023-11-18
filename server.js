const express = require('express');
const app = express() ;

app.get("/" , (req , res) => {
    res.send("Hello Home Page")
})

app.get("/register" , (req , res) => {
    res.send("Registration Home Page")
})


const PORT = 5000
app.listen(PORT , () => { 
    console.log(`Your server is running at Port ${PORT} `);
})