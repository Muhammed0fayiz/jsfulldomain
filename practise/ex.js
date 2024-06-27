// You define an IIFE (a function wrapped in parentheses)
(function () {
    // Inside the IIFE, you can have your own variables without affecting the global scope
    var myVar = 20;
  
    // You can do some operations here
    console.log(myVar); // Outputs: 20
  })();
  
  // Outside the IIFE, myVar is not accessible
  console.log(myVar); // Throws an error because myVar is not defined in this scope