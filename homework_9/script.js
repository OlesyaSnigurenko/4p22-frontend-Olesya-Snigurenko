'use strict'

function makeFibonacciFunction() { 
    let a = -1;
    let b = 1;
    let c;
    
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
console.log(fibonacci());

