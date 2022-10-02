export class Kata {
  static dnaStrand(dna: string) {
    const hashTable: { [key: string]: string } = {
      A: "T",
      T: "A",
      C: "G",
      G: "C",
    };
    return dna
      .split("")
      .map((char) => hashTable[char])
      .join("");
  }
}
