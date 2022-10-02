export class Kata {
  static getCount(str: string): number {
    return [...str].filter((char) => "aeiou".includes(char)).length;
  }
}
