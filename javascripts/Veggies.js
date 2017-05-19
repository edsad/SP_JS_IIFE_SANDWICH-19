"use strict";
console.log("veggies is working");

var SandwichMaker = (function(completeSandwich) {
  var veggieChoice = {
    onions: .50,
    spinach: .50,
    bananaPeppers: .50,
    lettuce: .50,
    tomatos: .50
  }

     // Augment the original object with another method
    completeSandwich.addVeggies = function(name) {
      var veggieOrder = 0;
      veggieOrder += veggieChoice[name];
      return veggieOrder;
    }


  return completeSandwich;
})(SandwichMaker);
