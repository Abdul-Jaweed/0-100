function getLength(str) {
    console.log("Original String : ", str);
    console.log("Length : ", str.length);
}

// getLength("Hello World!...");


function findIndexOf(str, target) {
    console.log("Original String : ", str);
    console.log("Index : ", str.indexOf(target));
}

// findIndexOf("Hello World!...", "World");


function lastIndexOf(str, target) {
    console.log(`Original String : ${str}`);
    console.log(`Index : ${str.lastIndexOf(target)}`);
}

// lastIndexOf("Hello World!...", "World")


function getSlice(str, start, end) {
    console.log(`Original String : ${str}`);
    console.log(`After Slice : ${str.slice(start, end)}`);
}

// getSlice("Hello World", 0, 5)


function replaceString(str, target, replacement) {
    console.log(`Original String ${str}`);
    console.log(`After repace : ${str.replace(target, replacement)}`);
}

// replaceString("Hello World", "World", "JavaScript");

const initialArray = [1,2,3,4,5,6];

// for (let i=0;i<initialArray.length; i++) {
//     console.log(initialArray[i])
// }


function logThing(str) {
    console.log(str);
}

initialArray.forEach(logThing)