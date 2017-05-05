"use strict";
console.log("sandwichMaker.js is working");

var inputList = document.querySelectorAll("input");
  console.log("inputList", inputList);
  for (var i = 0; i < inputList.length; i++){
    inputList[i].addEventListener("click", function(event){
        console.log("event", event.target.name);
 })
}
// inputList.addEventListener("click", function(event){
  console.log("event", event.target.name);

// var SandwichMaker = (function() {

//   // Private variable to store the price
//   var totalPrice = 0;

//   // Return the public interface that other code can interact with
//   return {
//     addTopping: function(toppingPrice) {
//       totalPrice += toppingPrice;
//     }
//   };
// })();
