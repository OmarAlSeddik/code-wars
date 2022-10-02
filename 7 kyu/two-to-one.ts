const longest = (s1: string, s2: string): string => {
  return [...new Set(s1 + s2)]
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join("");
};
