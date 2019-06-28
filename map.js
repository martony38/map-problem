const { functionsAndArgs } = require("./functions");

initialTime = Date.now();

/* 
  Refactor the following mapping with a POJO instead of a Map:
  your code starts here
*/

const map = new Map();
functionsAndArgs.forEach(([func, arg]) => {
  map.set(func, arg);
});

/* 
  your code ends here
*/

finalTime = Date.now();
console.log("total run time (create mapping):", finalTime - initialTime);

module.exports = {
  map
};
