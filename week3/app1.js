const express = require("express");
const app = express();

app.use(express.json());

app.post('/health-checkup', (req, res)=>{
    const kidneys = req.body.kidneys;
    // if(!kidneys) {
    //     res.json({
    //         msg:"wrong inputs"
    //     })
    // }
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " kidneys");
})

// global catches

app.use((err, req, res, next)=>{
    res.json({
        msg:"Sorry something is up with our server..."
    })
})



app.listen(3000);