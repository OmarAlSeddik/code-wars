const accum = (str: string): string => {
  return str
    .split("")
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
    .join("-");
};
