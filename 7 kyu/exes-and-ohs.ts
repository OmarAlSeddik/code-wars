const xo = (str: string): boolean => {
  let x = str.split("").filter((char) => char.toLowerCase() === "x").length;
  let o = str.split("").filter((char) => char.toLowerCase() === "o").length;
  return x === o;
};
