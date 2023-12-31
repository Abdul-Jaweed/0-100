const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userappnew")


const User = mongoose.model("Users", {
    name:String,
    email:String,
    password:String
});

app.post("/signup", function (req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
})


const user = new User({
    name: "Abdul Jaweed",
    email: "jdgaming7320@gmail.com",
    password: "123456"
});

user.save();