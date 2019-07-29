const { map } = require("./map");

/*
  Refactor the following by using a POJO (define it in map.js) to
  do the same. DO NOT use the functions array here.

  your code starts here
*/

function getArg(func) {
  //const arg = map.get(func);
  const arg = Object.values(map).find(value => value.func === func).arg;
  return arg;
}

/*
  your code ends here
*/

// run takes a function object as argument and return the function
// called with the argument corresponding to the function.
const run = func => {
  const arg = getArg(func);
  return func(arg);
};

module.exports = run;
