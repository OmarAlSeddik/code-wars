// Solution 1
const noSpace = (str: string): string => {
  return str
    .split("")
    .filter((character) => character !== " ")
    .join("");
};

// Solution 2
const noSpace2 = (str: string): string => {
  return str.replace(/\s/g, "");
};
