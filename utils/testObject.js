// taken from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const initialTime = Date.now();
const hash = {};
Array.from(new Array(100000)).map((value, idx) => {
  const newDatum = uuidv4();
  hash[`org-${idx + 1}`] = newDatum;
  return idx;
});
const finalTime = Date.now();
console.log("total run time (initial set object):", finalTime - initialTime);

function update() {
  const startTime = Date.now();
  for (let j = 0; j < 10; j++) {
    for (let i = 1; i < 100001; i++) {
      hash[`org-${i}`] = uuidv4();
    }
  }
  const endTime = Date.now();
  console.log("total run time (set object):", endTime - startTime);
}

function iterate() {
  const startTime = Date.now();
  let sum = 0;
  for (let j = 0; j < 10; j++) {
    for (const value of Object.values(hash)) {
      sum += value;
    }
  }
  const endTime = Date.now();
  console.log("total run time (iterate object):", endTime - startTime);
}

function getKeys() {
  let data;
  const startTime = Date.now();
  for (let j = 0; j < 10; j++) {
    for (let i = 1; i < 100001; i++) {
      data = hash[`org-${i}`];
    }
  }
  const endTime = Date.now();
  console.log("total run time (get object):", endTime - startTime);
}

update();
iterate();
getKeys();
