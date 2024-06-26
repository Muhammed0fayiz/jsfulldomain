// Constructor for a basic object
function BasicObject() {
    this.basicProperty = "I am a basic property";
  }
  
  // Constructor for an extended object
  function ExtendedObject() {
    this.extendedProperty = "I am an extended property";
  }



  // Set up prototype chain
ExtendedObject.prototype = new BasicObject();


const basicObj = new BasicObject();
const extendedObj = new ExtendedObject();


console.log(extendedObj.extendedProperty); // Output: I am an extended property
console.log(extendedObj.basicProperty);    // Output: I am a basic property

