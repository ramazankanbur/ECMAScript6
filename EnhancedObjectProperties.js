//ES5
var x = 0,
  y = 0;
obj = { x: x, y: y };
console.log(obj.x);

//ES6
var x = 0,
  y = 0;
obj = { x, y };
console.log(obj.x);

//ES5
var indexFn = function () {
  return 1;
};
var objES5 = {
  name: 'Can',
};
objES5['Columnn' + indexFn()] = 42;
console.log(objES5);
//output
// { name: 'Can', Columnn1: 42 }

//ES6
let objES6 = {
  name: 'Can',
  ['Columnn' + indexFn()]: 42,
};
console.log(objES6);
//output
// { name: 'Can', Columnn1: 42 }

//ES5
obj = {
  fn1: function (a, b) {
    return '';
  },
  fn2: function (x, y) {
    return '';
  },
};

//ES6
obj = {
  fn1(a, b) {
    return '';
  },
  fn2(x, y) {
    return '';
  },
};
