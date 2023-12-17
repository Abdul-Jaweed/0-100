// const dog = {
//     name : "doogie",
//     legCount : 2,
//     speaks : "bhow bhow"
// };

// const cat = {
//     name : "cat",
//     legCount:2,
//     speaks:"meow"
// };

// console.log("Animal" + dog["name"]+ " " + dog["speaks"]);
// console.log("Animal" + cat["name"]+ " " + cat["speaks"]);


// function PrintStr(animal) {
//     console.log("Animal" + animal["name"]+ " " + animal["speaks"]);
// }

// PrintStr(dog);
// PrintStr(cat);


class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak() {
        console.log(`hi there ${this.speaks}`)
    }
}


let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");
dog.speak();
cat.speak();