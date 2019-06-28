let initialTime = Date.now();
const map = new Map();
for (let i = 1; i < 100001; i++) {
  map.set(`org-${i}`, "some data");
}
let finalTime = Date.now();
console.log("total run time (initial set map):", finalTime - initialTime);

function update() {
  const startTime = Date.now();
  for (let j = 0; j < 10; j++) {
    for (let i = 1; i < 100001; i++) {
      map.set(`org-${i}`, "some updated data");
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
