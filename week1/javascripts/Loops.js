let ans = 0;

for (let i=1; i<=50; i++){
    ans+=i;
}

// console.log(ans);


function findSum(n){
    let ans = 0;
    for (let i=1; i<=n; i++){
        ans+=i;
    }
    return ans;
}


// console.log(findSum(100));


function square(n){
    return n * n
}

function cube(n){
    return n * n * n
}

function sumofSquare(a, b) {
    const val1 = square(a);
    const val2 = square(b);
    
    return val1 + val2;
}

// console.log(sumofSquare(2,2))


function sumOfSomething(a,b,callback) {
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}

console.log(sumOfSomething(2,2,square));
console.log(sumOfSomething(2,2,cube));