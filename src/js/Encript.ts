export class Encript {
  private strDecript: string;
  private ouputEncript: string | null;

  constructor(strDecript: string) {
    this.strDecript = strDecript;
    this.ouputEncript = null;
  }

  public encript(): string {
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    const vowelsEncripts = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };
    let newWords = "";
    const arr = this.strDecript.toLowerCase().split("");
    for (const item of arr) {
      //@ts-ignore
      newWords += vowelsEncripts[item] || item;
    }
    return newWords;
  }
}
