// console.log("Hello World");

// let name = "Jaweed";
// let age = 24;
// let isMarried = false;

// console.log(`this person is ${name} and their age is ${age}`)


// if (isMarried==true){
//     console.log(name + "is married");
// } else console.log(name + "is not married");

// let count = 0;
// for (let i = 1; i<=1000;i++){
//     count += i;
// }
// console.log(count);



// Write a program prints all the even numbers in an array

// const personArray = ["Abdul","Jaweed","JD"]
// console.log(personArray[0])


const ages = [21,22,23,24,25,26,27,28,29];



// for (let i = 1; i<ages.length; i++) {
//     if (ages[i]%2==0){
//         console.log(ages[i]);
//     }
// }


// Write a program to print the biggest number in an array

// console.log(Math.max(...ages));


// const user1 = {
//     firstName: "Abdul",
//     gender: "male"
// }

// console.log(user1['firstName']);
// console.log(user1['gender']);



// Write a program that prints all the male people's first name given a complex object

// const allUsers = [
//     {
//         firstName:"Abdul",
//         gender:"male"
//     },
//     {
//         firstName:"Jaweed",
//         gender:"male"
//     },
//     {
//         firstName:"JD",
//         gender:"male"
//     },
//     {
//         firstName:"Shafiya",
//         gender:"female"
//     },
//     {
//         firstName:"Sadaf",
//         gender:"female"
//     }
// ]


// for (let i=0; i<allUsers.length; i++) {
//     if (allUsers[i]["gender"]=='male') {
//         console.log(allUsers[i]['firstName'])
//     }
// }



// Write a program that reverses all the elements of an array

// let arr = [1,2,3,4,5,6,7,8];

// console.log([...arr].reverse());



// Write a function that finds the sum of two numbers 

// function findSum(a,b){
//     return a + b;
// }

// console.log(findSum(2,3));


// Write a another function that displays this result in a pretty format




// Write another function that takes this sum and prints it in passive tense



// callback function

// function calculate(a,b,type) {
//     return sum(a,b);
// }

// function sum(a,b){
//     return a + b
// }

// console.log(calculate(2,3,sum))



// setTimeOut function

function greet() {
    console.log("Hello World");
}

// setTimeout(greet, 2*1000)


// setInterval function

setInterval(greet, 1*3000)