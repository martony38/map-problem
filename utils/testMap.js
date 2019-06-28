// taken from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

let initialTime = Date.now();
const map = new Map();
Array.from(new Array(100000)).map((value, idx) => {
  const newDatum = uuidv4();
  map.set(`org-${idx + 1}`, newDatum);
  return idx;
});
let finalTime = Date.now();
console.log("total run time (initial set map):", finalTime - initialTime);

function update() {
  const startTime = Date.now();
  for (let j = 0; j < 10; j++) {
    for (let i = 1; i < 100001; i++) {
      map.set(`org-${i}`, uuidv4());
    }
  }
  const endTime = Date.now();
  console.log("total run time (set map):", endTime - startTime);
}

function iterate() {
  const startTime = Date.now();
  let sum = 0;
  for (let j = 0; j < 10; j++) {
    for (const value of map.values()) {
      sum += value;
    }
  }
  const endTime = Date.now();
  console.log("total run time (iterate map):", endTime - startTime);
}

function getKeys() {
  let data;
  const startTime = Date.now();
  for (let j = 0; j < 10; j++) {
    for (let i = 1; i < 100001; i++) {
      data = map.get(`org-${i}`);
    }
  }
  const endTime = Date.now();
  console.log("total run time (get map):", endTime - startTime);
}

update();
iterate();
getKeys();
