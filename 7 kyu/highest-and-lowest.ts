class Kata {
  static highAndLow(numbers: string): string {
    const array = numbers.split(" ").map((n) => parseInt(n));
    const highest = Math.max(...array);
    const lowest = Math.min(...array);
    return `${highest} ${lowest}`;
  }
}
