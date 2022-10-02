const isIsogram = (str: string): boolean => {
  return new Set(str.toLowerCase()).size === str.length;
};
