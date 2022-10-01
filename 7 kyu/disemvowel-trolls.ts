// Solution 1
class Kata3 {
  static disemvowel(str: string): string {
    return [...str]
      .filter((char) => !"aeiou".includes(char.toLowerCase()))
      .join("");
  }
}

// Solution 2
class Kata4 {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, "");
  }
}
