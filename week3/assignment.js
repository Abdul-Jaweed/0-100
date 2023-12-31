const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username,
    }, jwtPassword)
    return signature;
}


// const ans = signJwt("jdgaming7320@gmail.com", "123456");
// console.log(ans)


function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true
    } catch (e) {

    }
    return false
}

jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpkZ2FtaW5nNzMyMEBnbWFpbC5jb20iLCJpYXQiOjE3MDQwNTM2ODB9.c2h6iecIwitqkFQyY9-UmM4E5Dve0ZPwdYroID2cFcQ"

console.log(verifyJwt(jwt_token))

function decodeJwt(token) {
    // true, false
    const decoded = jwt.decode(token);
    if(decoded) {
        return true;
    } else {
        return false;
    }
}

// console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6ve0ZPwdYroID2cFcQ"))