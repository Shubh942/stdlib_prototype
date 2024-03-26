// Import the necessary function from the appropriate module
var arrayview2iteratorRight = require("@stdlib/array/to-view-iterator-right");
// Define the execute function
window.execute = (userInput) => {
  var output = [];
  var it = arrayview2iteratorRight(userInput);

  var v = it.next().value;
  output.push(v); // returns 4

  v = it.next().value;
  output.push(v); // returns 1

  v = it.next().value;
  output.push(v);

  console.log(output);
  return output;
};
