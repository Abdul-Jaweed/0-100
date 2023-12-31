const express = require("express");
const app = express();
const zod = require("zod");

app.use(express.json());

const schema = zod.array(zod.number());

// {
//     email: string,
//     password: atleast 8 letterss
//     country: "IN", "US"
// }

const schema = zod.object({
    email:zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(z.number())
})


app.post('/health-checkup', (req, res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    res.send({
        response
    })
    const kidneyLength = kidneys.length;
    if (!response.success) {
        res.status(411).json({
            msg:"input is invalid"
        })
    } else {res.send({response})}

})




app.listen(3000);