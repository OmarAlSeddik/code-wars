// Solution 1
export class Kata {
  static disemvowel(str: string): string {
    return [...str]
      .filter((char) => !"aeiou".includes(char.toLowerCase()))
      .join("");
  }
}

// Solution 2
export class Kata2 {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, "");
  }
}
