const { functionsAndArgs } = require("./functions");
const run = require("./run");

let initialTime = Date.now();
let test = run(functionsAndArgs[0][0]);
let finalTime = Date.now();
console.log("total run time test 1:", finalTime - initialTime);
if (test === "function 1 argument: I am the first arg")
  console.log("test 1: success");
else console.log("test 1: failed");

initialTime = Date.now();
test = run(functionsAndArgs[1][0]);
finalTime = Date.now();
console.log("total run time test 2:", finalTime - initialTime);
if (test === 8) console.log("test 2: success");
else console.log("test 2: failed");

initialTime = Date.now();
test = run(functionsAndArgs[2][0]);
finalTime = Date.now();
console.log("total run time test 3:", finalTime - initialTime);
if (test === "function 3 argument: another function")
  console.log("test 3: success");
else console.log("test 3: failed");

initialTime = Date.now();
test = run(functionsAndArgs[500000][0]);
finalTime = Date.now();
console.log("total run time test 4:", finalTime - initialTime);
if (test === `function 499997 argument: ${functionsAndArgs[500000][1]}`)
  console.log("test 4: success");
else console.log("test 4: failed");

initialTime = Date.now();
test = run(functionsAndArgs[999999][0]);
finalTime = Date.now();
console.log("total run time test 5:", finalTime - initialTime);
if (test === `function 999996 argument: ${functionsAndArgs[999999][1]}`)
  console.log("test 5: success");
else console.log("test 5: failed");

initialTime = Date.now();
test = run(functionsAndArgs[2999999][0]);
finalTime = Date.now();
console.log("total run time test 6:", finalTime - initialTime);
if (test === `function 2999996 argument: ${functionsAndArgs[2999999][1]}`)
  console.log("test 6: success");
else console.log("test 6: failed");
