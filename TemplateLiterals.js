//ES5
var user = { name: 'Ali' };
var product = { brand: 'apple', unitprice: 100 };
var message =
  'Hoş geldin ' +
  user.name +
  ',\n' +
  product.brand +
  ' markalı ürünümüzün fiyatı' +
  product.unitprice +
  "TL'dir";
console.log(message);
//output
// Hoş geldiniz Ali
// apple markalı ürünümüzün  fiyatı 100 TL'dir

//ES6
var user = { name: 'Ali' };
var product = { brand: 'apple', unitprice: 100 };
var message = `Hoş geldin ${user.name}
${product.brand} markalı ürünümüzün fiyatı ${product.unitprice} TL'dir`;
console.log(message);
//output
// Hoş geldiniz Ali
// apple markalı ürünümüzün  fiyatı 100 TL'dir

//ES5
var a = 3;
var b = 5;
var flag = true;

var flagResult = flag === true ? ',\nBingoo' : '';
var result1 = a + ' * ' + b + ' = ' + a * b + "'dir" + flagResult;
console.log(result1);
//output
// 3 * 5 = 15'dir,
// Bingoo

//ES6
var result2 = `${a} * ${b} = ${a * b}'dir 
${flag === true ? 'Bingoo' : ''}`;
console.log(result2);
//output
// 3 * 5 = 15'dir,
// Bingoo
