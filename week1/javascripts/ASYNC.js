function findSum(n) {
    let ans = 0;
    for (let i =0; i<=n;i++) {
        ans+=i;
    }
    return ans;
}

function findSumTill100() {
    return findSum(100);
}

// setTimeout(findSumTill100, 1000);
// console.log("Hello World!...");


const fs = require("fs");

// fs.readFile("a.txt", "utf-8",function(err, data) {
//     console.log(data);
// } )

// console.log("Hello World!....")


let sum = 0;

for (let i=0;i<=1000000000;i++) {
    sum++;
}

// console.log(sum)

// console.log("Hello World!....2")



function JaweedReadFile() {
    console.log("Inside JaweedReadFile...")
    return new Promise(function(resolve) {
        console.log("Inside Promise...")
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("Before resolve...")
            resolve(data);
        });
    })
}

function onDone(data) {
    console.log(data);
}

// JaweedReadFile().then(onDone);



// let p = new Promise(function(resolve) {
//     resolve("Hello World!...");
// });

// p.then(function() {
//     console.log(p);
// })


// function JaweedASyncFunction() {
//     let p = new Promise(function(resolve) {
//         resolve("Hello World!...");
//     })
//     return p;
// }

// const value = JaweedASyncFunction();
// value.then(function(data) {
//     console.log(data);
// })



function JaweedASyncFunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Inside's JaweedReadFile...")
        }, 1000)
    });
    return p;
}

async function main() {
    let value = await JaweedASyncFunction()
    console.log(value)
}

main();