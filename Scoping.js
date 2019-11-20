//var function scoped
//let block scoped
function test1() {
  if (true) {
    var dummy1 = 'var belirtecinden'; 
    let dummy2 = 'let belirtecinden';
   
    console.log(dummy1);
    //output => var belirtecinden
    console.log(dummy2);
    //output => let belirtecinden

    var dummy1 = 'var yeniden tanımlama'; 
    let dummy2 = 'let yeniden tanımlama';
    //output => SyntaxError: Identifier 'dummy2' has already been declared
  }

  console.log(dummy1);
  //output => var belirtecinden
  console.log(dummy2);
  //output => ReferenceError: dummy2 is not defined 
}
test1();

///// block-scoped function ES5
(function(){
  function privateFunc(){
      console.log("Bu scope dışından erişelemez");
      (function(){
          console.log("Bu scope dışından erişilemez, privateFunc'tan da erişilemez");
      })();
  }
  privateFunc();
})();

console.log('-----------------');
///// block-scoped function ES6
{
  function privateFunc(){
      console.log("Bu scope dışından erişelemez");
      {
          console.log("Bu scope dışından erişilemez, privateFunc'tan da erişilemez");
      }
  }
  privateFunc();
}
