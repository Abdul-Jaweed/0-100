const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json())

mongoose.connect("mongodb+srv://myAtlasDBUser:bCIfYIuklYT1Xq35@myatlasclusteredu.anflorb.mongodb.net/userapp")

const User = mongoose.model("Users",{
    name: String,
    email:String,
    password:String
});


app.post("/signup", async function(req, res) {
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name;

    const existingUser = await User.findOne({email: email});
    // CRUD => create, update, delete, read
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email: email,
        password:password
    })
    
    user.save();
    res.json({
        "msg":"User created successfully"
    })

})


app.listen(port);