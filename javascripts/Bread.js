"use strict";
console.log("bread is working");

var SandwichMaker = (function(completeSandwich) {
  var breadChoice = {
    white: .50,
    wheat: .50,
    multiGrain: .50,
    rye: .50,
    bagel: .50
  }

  completeSandwich.addBread = function(name) {
    var breadOrder = 0;
    breadOrder += breadChoice[name];
    return breadOrder;
  }

  return completeSandwich;
})(SandwichMaker);

