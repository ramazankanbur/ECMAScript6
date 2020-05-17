var symKey = Symbol();

var obj = {
  [symKey]: 'symbol val',
  a: 'val1',
  b: 'val2',
};

console.log(obj);
//{ a: 'val1', b: 'val2', [Symbol()]: 'symbol val' }

console.log(obj[symKey]);
//symbol val

//referans ile güncellenebilir
obj[symKey] = 'symbol val updated';
console.log(obj);
//{ a: 'val1', b: 'val2', [Symbol()]: 'symbol val updated' }

//Object.keys() ile obj'nin symbol tipli özelliklerine erişilmez
console.log(Object.keys(obj));
//[a,b]
