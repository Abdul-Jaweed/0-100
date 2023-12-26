const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}];

app.get('/', (req, res)=> {
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;
    let numberofHealthyKidneys = 0;
    for (let i=0;i<johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberofHealthyKidneys = numberofHealthyKidneys + 1;
        }
    }
    const numberofUnhealthyKidney = numberofKidneys - numberofHealthyKidneys;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidney
    })
})



app.post('/', (req, res)=> {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})


app.put('/', (req, res)=>{
    for (let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({});
})


app.delete('/', (req, res)=>{
    if(isThereAtleastOneUnhealthyKidney){
        const newkidneys = [];
        for (let i = 0; i<users[0].kidneys.length;i++) {
            if (users[0].kidneys[i].healthy) {
                newkidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newkidneys;
        res.json({"msg":"done"})
    } else {
        res.sendStatus(411).json({
            msg:"You have no bad kidney"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i=0;i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}


app.listen(port);