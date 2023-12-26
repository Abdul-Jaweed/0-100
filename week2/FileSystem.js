const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get('/files/:fileName', (req, res)=>{
    const name = req.params.fileName;
    console.log(name);
    fs.readFile(name, "utf-8", (err, data)=>{
        res.json({
            data
        })
    })
});

app.listen(port);