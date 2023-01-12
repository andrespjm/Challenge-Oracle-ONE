export class Crypt {
  private static strDecrypt: string;
  private static strEncrypt: string;

  public static encrypt(strDecrypt: string): string | null {
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    if (/[A-Z]/g.test(strDecrypt)) return null;
    this.strDecrypt = strDecrypt;
    const vowelsEncrypts = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };
    let newWords = "";
    const arr = this.strDecrypt.toLowerCase().split("");
    for (const item of arr) {
      //@ts-ignore
      newWords += vowelsEncrypts[item] || item;
    }
    return newWords;
  }

  public static decrypt(strEncrypt: string): string | null {
    if (/[A-Z]/g.test(strEncrypt)) return null;
    this.strEncrypt = strEncrypt;
    const replaceWithChar = ["a", "e", "i", "o", "u"];

    const charToReplace = ["ai", "enter", "imes", "ober", "ufat"];

    for (let i = 0; i < charToReplace.length; i++) {
      strEncrypt = strEncrypt.replace(
        new RegExp(charToReplace[i], "g"),
        replaceWithChar[i]
      );
    }

    return strEncrypt;
  }
}
