//ES5
var list = [1, 2, 3];
var a = list[0],
  b = list[2];
console.log(a, b);

//ES6
var [a, , b] = list;
console.log(a, b);

var obj = function fn1() {
  return { x: 'val1', y: 12, z: 'val2' };
};
//ES5
var resES5 = obj();
var x = resES5.x;
var y = resES5.y;
var z = resES5.z;
console.log(x, y, z);
//output
//val1 12 val2

//ES6
var { x, y, z } = obj();
console.log(x, y, z);
//output
//val1 12 val2

//ES5
var obj = { a: 1 };
var list = [1];
var a = obj.a;
var b = obj.b === undefined ? 2 : obj.b;
var x = list[0];
var y = list[1] === undefined ? 2 : list[1];
console.log(a, b, x, y);
//output
//1 2 1 2

//ES6
var obj = { a: 1 };
var list = [1];
//Eğer obj içinde b değeri tanımlanırsa o değer değişkene atanır yoksa 2 olarak ayarlanır
var { a, b = 2 } = obj;
//Eğer list içinde 2. eleman olursa y'nin değeri 2. eleman olarak ayarlanır yoksa 2 olarak ayarlanır
var [x, y = 2] = list;
console.log(a, b, x, y);
//output
//1 2 1 2
