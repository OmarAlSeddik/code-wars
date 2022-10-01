const descendingOrder = (n: number): number => {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => parseInt(b) - parseInt(a))
      .join("")
  );
};
