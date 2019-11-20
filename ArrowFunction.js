//ES5 that, this ataması yapılmalı ya da bind edilmeli 
var obj = {
  nums: [1, 2, 3, 4, 5, 6, 10],
  fives: [],
  hop: function() { 
    var that = this;
    this.nums.forEach(function(v) {  
        if(v % 5 ===0)
        that.fives.push(v); 
    });
    console.log(this.fives);
  }
};

obj.hop();

console.log('----------------------');
//ES6
var obj1 = {
    nums: [1, 2, 3, 4, 5, 6, 10],
    fives: [], 
    hop:function ()  {   
      this.nums.forEach((v) => {  
          if(v % 5 ===0)
          this.fives.push(v); 
      });
      console.log(this.fives);
    }
  };

  obj1.hop();