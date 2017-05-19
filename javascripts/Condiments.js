"use strict";
console.log("condiments is working");

var SandwichMaker = (function(completeSandwich) {
  var condimentChoice = {
    mayo: .10,
    yellowMustard: .10,
    dijonMustard: .20,
    oilAndVinegar: .10,
    pesto: .50
  }

     // Augment the original object with another method
    completeSandwich.addCondiments = function(name) {
      var condimentOrder = 0;
      condimentOrder += condimentChoice[name];
      return condimentOrder;
    }


  return completeSandwich;
})(SandwichMaker);
