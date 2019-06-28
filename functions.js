/*
  Decrease this number if node crash
*/
const NUMBER_OF_FUNCTIONS = 4000000;

// taken from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const functionsAndArgs = [
  [arg => `function 1 argument: ${arg}`, "I am the first arg"],
  [arg => arg * 2, 4],
  [arg => arg(), () => `function 3 argument: another function`]
];
for (let i = 0; i < NUMBER_OF_FUNCTIONS; i++) {
  const func = arg => `function ${i} argument: ${arg}`;
  functionsAndArgs.push([func, uuidv4()]);
}

module.exports = { functionsAndArgs };
