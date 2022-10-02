const getSum = (a: number, b: number): number => {
  let sum = 0;
  let [start, end] = a < b ? [a, b] : [b, a];
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};
