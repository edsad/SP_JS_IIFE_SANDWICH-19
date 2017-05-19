"use strict";
console.log("DOM handler.js is working");

  // Variable to hold the final price. Default to 0.
  var finalSandwichPrice = 0;

  var total = 0;
  var output = document.getElementById("output");
  var finalSandwich = function(order){
      let newTotal = order;
      output.innerHTML = newTotal;
  };

    document.getElementById("myBtn").addEventListener("click", deli);

    function deli(finalSandwich, total) {
      alert("your total is " + "$" + output.innerHTML);
      // output.innerHTML = "You clicked on " + elementText;
  }

// function deli(){
//   var x = document.getElementById("myBtn").innerHTML;
//   document.getElementById("output").innerHTML = x;
// }

  var sandInput = document.querySelectorAll("input");
      // console.log("sandInput", sandInput);
      for (var i = 0; i < sandInput.length; i++){
          sandInput[i].addEventListener("click", function(event){
            //   console.log("event", event.target.className);

          if (event.target.className == "bread"){
            if (event.target.checked){
              total += (SandwichMaker.addBread(event.target.name));
            } else {
              total -= (SandwichMaker.addBread(event.target.name));
            }
          }
          if (event.target.className == "cheese"){
            if (event.target.checked){
              total += (SandwichMaker.addCheese(event.target.name));
            } else {
              total -= (SandwichMaker.addCheese(event.target.name));
            }
          }
          if (event.target.className == "meat"){
            if (event.target.checked){
              total += (SandwichMaker.addMeat(event.target.name));
            } else {
              total -= (SandwichMaker.addMeat(event.target.name));
            }
          }
          if (event.target.className == "veggies"){
            if (event.target.checked){
              total += (SandwichMaker.addVeggies(event.target.name));
            } else {
              total -= (SandwichMaker.addVeggies(event.target.name));
            }
          }
          if (event.target.className == "condiments"){
            if (event.target.checked){
              total += (SandwichMaker.addCondiments(event.target.name));
            } else {
              total -= (SandwichMaker.addCondiments(event.target.name));
            }
          }

    finalSandwich(total);
    })
  };
