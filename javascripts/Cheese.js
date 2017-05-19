"use strict";
console.log("cheese is working");

var SandwichMaker = (function(completeSandwich) {
  var cheeseChoice = {
    american: .50,
    cheddar: .50,
    muenster: .50,
    swiss: .50,
    colbyJack: .50
  }

     // Augment the original object with another method
    completeSandwich.addCheese = function(name) {
      var cheeseOrder = 0;
      cheeseOrder += cheeseChoice[name];
      return cheeseOrder;
    }


  return completeSandwich;
})(SandwichMaker);

