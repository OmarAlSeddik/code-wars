const getMiddle = (str: string): string => {
  if (str.length < 3) return str;
  let cut = Math.ceil(str.length / 2 - 1);
  return str.slice(cut, -cut);
};
