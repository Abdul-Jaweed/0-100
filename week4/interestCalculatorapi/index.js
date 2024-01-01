const express = require("express");
const app = express();
const port = 3000;

app.get("/interest", (req, res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    
    res.send({
        total:total,
        interest:interest,
    })
});

app.listen(port)