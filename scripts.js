const TEMPERATURE = 400;

const minCoolingTimes = {
  "3/4in": 2,
  "2in": 4,
  "4in": 10,
  "8in": 15,
};

// write a function that takes a pipe size and returns the minimum cooling time

function findCoolTime(firstArg) {
  // as if we are doing let pipeSize = whatever value was passed when the function was called
  return minCoolingTimes[firstArg];
  // when you have nameOfObject[key], JS gives you back the value for that key
}

function calculateTotalCoolTime(sizeArray) {
  let totalTime = 0;
  for (let size of sizeArray) {
    console.log("the current size is:", size);
    let coolTime = findCoolTime(size);
    console.log("cool time for this size is:", coolTime);
    totalTime += coolTime;
    console.log("total time is currently:", totalTime);
  }
  return totalTime;
}

let totalCoolTime = calculateTotalCoolTime(["2in", "2in", "4in", "3/4in"]);

// calls the function once and stores the output in totalCoolTime
totalCoolTime = calculateTotalCoolTime(["8in", "2in", "2in", "4in", "3/4in"]);
// this would call the function again on a new set of data and assign this new value to totalCoolTime
