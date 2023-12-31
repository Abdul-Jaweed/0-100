const jwt = require("jsonwebtoken");


// decode, verify, generate

const value = {
    name:"jaweed",
    accountNumber:"123456"
}

// jwt 
const token = jwt.sign(value, "secret");
// console.log(token)
// this token has been generated using this secret, and hence this token can only be verified using this secret

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamF3ZWVkIiwiYWNjb3VudE51bWJlciI6IjEyMzQ1NiIsImlhdCI6MTcwNDA1MjUwNX0.GgybSSCA7O2IwVqX8D7D19OT6qP7jZXeKb0bCTWC8gc"

// verify

const verify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamF3ZWVkIiwiYWNjb3VudE51bWJlciI6IjEyMzQ1NiIsImlhdCI6MTcwNDA1MjUwNX0.GgybSSCA7O2IwVqX8D7D19OT6qP7jZXeKb0bCTWC8gc", "secret")

console.log(verify)

// { name: 'jaweed', accountNumber: '123456', iat: 1704052505 }