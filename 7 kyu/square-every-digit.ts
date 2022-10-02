export class Kata {
  static squareDigits(n: number): number {
    return parseInt(
      n
        .toString()
        .split("")
        .map((num) => parseInt(num) ** 2)
        .join("")
    );
  }
}
