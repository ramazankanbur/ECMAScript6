var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});

console.log('---------------');

var newArray = numbers.map(function(number) {
  return number * 2;
});
console.log(newArray);

console.log('---------------');

var evenList = numbers.filter(function(number) {
  return number % 2 == 0;
});
console.log(evenList);

console.log('---------------');

var users = [
  { name: 'ramazan', lastname: 'kanbur' },
  { name: 'duygu', lastname: 'kanbur' },
  { name: 'fatma', lastname: 'türk' },
  { name: 'duygu', lastname: 'yalçın' }
];

var duygu = users.find(function(user) {
  return user.name === 'duygu';
});
console.log(duygu);

console.log('---------------');

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var result = computers.every(function(computer) {
  return computer.ram > 16;
});
console.log(result);

console.log('---------------');

var result = computers.some(function(computer) {
  return computer.ram > 16;
});
console.log(result);

console.log('---------------');

var numbers = [10,20,30];
 
var result = numbers.reduce(function(sum, number){
 return sum + number;
}, 17);  
console.log(result);

console.log('---------------');

var primaryColors = [
   {color: 'red'},
   {color: 'yellow'},
   {color: 'blue'}
 ];
  
 var result = primaryColors.reduce(function(previous, primaryColor) {
   previous.push(primaryColor.color);
     return previous;
 }, []); 
 console.log(result); 

 console.log('---------------');
 
 function balancedParens(string){
   return !string.split("").reduce(function(previous, char){
    if(previous < 0) { return previous; }
     if(char === "(") { return ++previous; } 
     if(char === ")") { return --previous; }
     return previous;
   }, 0); 
 }
 balancedParens("(()()())()");
