'use strict'

function makeFibonacciFunction() { 
    let a = 0;
    let b = 1;
    let c;
    console.log(a);
    console.log(b);
    return function() {
        c = a + b;
        a = b;
        b = c;
        return c;
    }
}
   
const fibonacci = makeFibonacciFunction();

console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 

