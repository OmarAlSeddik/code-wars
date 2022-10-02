const findShort = (str: string): number => {
  return Math.min(...str.split(" ").map((word) => word.length));
};
