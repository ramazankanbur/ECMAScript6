const PI = 3.141593;
console.log(PI > 3);
//TypeError
PI = 34;
console.log(PI);

console.log('---------------');

//ES5 
Object.defineProperty(typeof global === "object" ? global : window, "e", {
    value:        2.7182,
    enumerable:   true,
    writable:     false,
    configurable: false
})
console.log(e > 3);
//TypeError
e = 2;
console.log(e); 