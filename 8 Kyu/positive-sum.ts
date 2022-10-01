// Solution 1
const positiveSum = (array: number[]): number => {
  let sum = 0;
  for (const number of array) {
    if (number > 0) sum += number;
  }
  return sum;
};

// Solution 2
const positiveSum2 = (array: number[]): number => {
  return array
    .filter((element) => element > 0)
    .reduce((acc, curr) => acc + curr, 0);
};
