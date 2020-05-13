//ES5
//  lib/math.js
LibMath = {};
LibMath.sum = function (x, y) {
  return x + y;
};
LibMath.pi = 3.141593;

//  someApp.js
var math = LibMath;
console.log('2π = ' + math.sum(math.pi, math.pi));

//  otherApp.js
var sum = LibMath.sum,
  pi = LibMath.pi;
console.log('2π = ' + sum(pi, pi));

//ES6
//  lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;

//  someApp.js
import * as math from 'lib/math';
console.log('2π = ' + math.sum(math.pi, math.pi));

//  otherApp.js
//  Sadece ihtiyaç duyulan kod parçaları da dahil edilebilirdi.
import { sum, pi } from 'lib/math';
console.log('2π = ' + sum(pi, pi));
