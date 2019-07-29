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

function getSize() {
  let data;
  const startTime = Date.now();
  const size = map.size;
  const endTime = Date.now();
  console.log("total run time (get size map):", endTime - startTime);
}

function findKey() {
  let data;
  const startTime = Date.now();
  const hasKey = map.has("org-23672362723");
  const endTime = Date.now();
  console.log("total run time (find key map):", endTime - startTime);
}

function clearPairs() {
  let data;
  const startTime = Date.now();
  map.clear();
  const endTime = Date.now();
  console.log("total run time (clear map):", endTime - startTime);
}

update();
iterate();
getKeys();
getSize();
findKey();
clearPairs();
