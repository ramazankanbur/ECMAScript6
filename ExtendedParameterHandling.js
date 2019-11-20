//ES5
function add(x, y, z) {
  if (y === undefined) y = 7;
  if (z === undefined) z = 42;
  return x + y + z;
}
console.log(add1(1) === 50);
//ES6
function add1(x, y = 7, z = 42) {
  return x + y + z;
}
console.log(add1(1) === 50);

console.log('----------------');
//ES5
function addNumbers(first, second) {
  var numbers = Array.prototype.slice.call(arguments, 2);
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, first + second);
}

console.log(addNumbers(1, 2, 3, 4, 5));
//ES6-rest
function addNumbers1(first, second, ...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, first + second);
}

//Bu fonksiyon için istediğimiz sayıda parametre verebiliriz.
console.log(addNumbers1(1, 2, 3, 4, 5));

console.log('----------------');
//// array ////
//ES5
var nameArrayEs5 = ["ramazan","duygu"];
var newArrayEs5 = ["enis","kübra"].concat(nameArrayEs5);
console.log(newArrayEs5);

//ES6-spread
var nameArray = ["ramazan","duygu"];
var newArray= [...nameArray, "enis","kübra"];
console.log(newArray);
//// object ////

//ES5
var addressInfo = {
  city: "istanbul",
  district:"bahçelievler"
};
var userInfo = {
  name: "ramazan",
  surname: "kanbur"
};

for (var prop in userInfo) { addressInfo[prop] = userInfo[prop]; }
console.log(addressInfo);
  
//ES6-spread
var addressInfoEs6 = {
  city: "istanbul",
  district:"bahçelievler"
};
var userInfoEs6 = {
  name: "ramazan",
  surname: "kanbur"
};
var mergedObject ={...addressInfoEs6,...userInfoEs6}; 
console.log(mergedObject);


