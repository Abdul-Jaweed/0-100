const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.send("Hello World!...");
});

app.get('/user', (req, res)=>{
    res.json({
        name:"Abdul Jaweed",
        age:24,
        occupation:"AI Engineer",
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

