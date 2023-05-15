function birthdayCakeCandles(candles) {
  // Write your code here
  candles = [];
  let count = 1;
  for (let i = 0; i < candles.length - 1; i++) {
    for (let j = i + 1; j < candles.length; j++) {
      if (candles[i] === candles[j]) {
        count++;
      }
    }
  }
  return count;
}

function migratoryBirds(arr) {
  const frequency = {};
  let maxFrequency = 0;
  let mostFrequentBirdId = Number.MAX_SAFE_INTEGER;

  arr.forEach((birdId) => {
    frequency[birdId] = (frequency[birdId] || 0) + 1;
    if (frequency[birdId] > maxFrequency) {
      maxFrequency = frequency[birdId];
    }
  });

  Object.keys(frequency).forEach((birdId) => {
    if (frequency[birdId] === maxFrequency && birdId < mostFrequentBirdId) {
      mostFrequentBirdId = birdId;
    }
  });

  return mostFrequentBirdId;
}

function compareTriplets(a, b) {
  let pointAlice = 0;
  let pointBob = 0;
  let noBody = 0;
  a.forEach((element, index) => {
    if (a[index] > b[index]) {
      pointAlice++;
    } else if (a[index] < b[index]) {
      pointBob++;
    } else if (a[index] == b[index]) {
      noBody++;
    }
  });
  // console.log(pointAlice, pointBob, noBody)
}
