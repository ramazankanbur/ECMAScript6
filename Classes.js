//ES5
var PersonES5 = function(name) {
    this.name = name;
    this.walk();
};

PersonES5.prototype.walk = function () {
    return 'pata pata';
};

var FootballerES5 = function (name, team) {
    PersonES5.call(this,name);
    this.team = team;
};
FootballerES5.prototype = Object.create(PersonES5.prototype);
FootballerES5.prototype.constructor = FootballerES5;
FootballerES5.prototype.goalSkill = function () {
    return Math.random() * 100;
};

var ronaldo = new FootballerES5("Ronaldo", "Real Madrid");
console.log(ronaldo);
console.log(ronaldo.goalSkill());
console.log(ronaldo.walk());
//output
//FootballerES5 { name: 'Ronaldo', team: 'Real Madrid' }
//51.27228420669645
//pata pata

//ES6
class Person  { // <= sınıf oluşturmada kullanılan syntax
    constructor(name) { // <= sınıf oluşurken çalışan kısım (initialize)
      this.name = name;
    }  // <= virgül koyulmaz
     walk() { // <= sınıf içinde metod oluşturmada kullanılan syntax
      return 'pata pata';
     }
   }
    
   class Footballer extends Person{ // <= person sınıfından kalıtım alma syntax'ı
    constructor(name,team) { // <= Footballer sınıfının initializer'ı
      super(name); // <= Kalıtım alınan sınıfın initializer'ında ayarlama yapılacaksa super kullanılır.
      this.team = team;
    }
      
    goalSkill() {
     return Math.random() * 100;
    } 
   }
    
   var messi = new Footballer('Messi',  'Barcelona' );
    
   console.log(messi);
   console.log(messi.goalSkill());
   console.log(messi.walk());
//output
//Footballer { name: 'Messi', team: 'Barcelona' }
//51.27228420669645
//pata pata