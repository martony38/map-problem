const initialTime = Date.now();
const hash = {};
for (let i = 1; i < 100001; i++) {
  hash[`org-${i}`] = "some data";
}
const finalTime = Date.now();
console.log("total run time (initial set object):", finalTime - initialTime);

function update() {
  const startTime = Date.now();
  for (let j = 0; j < 10; j++) {
    for (let i = 1; i < 100001; i++) {
      hash[`org-${i}`] = "some updated data";
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

function getSize() {
  let data;
  const startTime = Date.now();
  const size = Object.keys(hash).length;
  const endTime = Date.now();
  console.log("total run time (get size object):", endTime - startTime);
}

function findKey() {
  let data;
  const startTime = Date.now();
  const hasKey = hash.hasOwnProperty("org-23672362723");
  const endTime = Date.now();
  console.log("total run time (find key object):", endTime - startTime);
}

function clearPairs() {
  let data;
  const startTime = Date.now();
  Object.keys(hash).forEach(key => delete hash[key]);
  const endTime = Date.now();
  console.log("total run time (clear object):", endTime - startTime);
}

update();
iterate();
getKeys();
getSize();
findKey();
clearPairs();
