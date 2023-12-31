const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json())

const port = 3001;


const ALL_USERS = [
    {
        username: "jaweed@gmail.com",
        password: "123",
        name: "Abdul Jaweed",
    },
    {
        username:"jd@gmail.com",
        password:"123321",
        name:"jd",
    },
    {
        username:"abdul@gmail.com",
        password:"12322",
        name:"Abdul",
    },
];


function userExists(username, password) {
    // write logic to return true or false if this user exits in ALL_USERS array
    let userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true;
        }
    }
    return userExists;
}



app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg:"User doesn't exit in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});


app.get("/users", (req, res)=>{
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
    } catch (err) {
        return res.status(403).json({
            msg:"Invalid token",
        });
    }
});


app.listen(port);