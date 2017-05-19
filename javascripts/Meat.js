"use strict";
console.log("meat.js is working");


var SandwichMaker = (function(completeSandwich) {
  var meatChoice = {
    ham: 1.50,
    turkey: 1.50,
    roastBeef: 1.50,
    salami: 1.50,
    roastChicken: 1.50
  }

      // Augment the original object with another method
    completeSandwich.addMeat = function(name) {
      var meatOrder = 0;
      meatOrder += meatChoice[name];
      return meatOrder;
    }


  return completeSandwich;
})(SandwichMaker);

