import { ClipboardFn } from "./Clipboard";

export class Crypt extends ClipboardFn {
  private static textDecrypt: string;
  private static textEncrypt: string;

  public static encrypt(strDecrypt: string): string | null {
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    if (!this.withoutUppercaseAndAccents(strDecrypt)) return null;
    const vowelsEncrypts = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };
    let newWords = "";
    const arr = strDecrypt.toLowerCase().split("");
    for (const item of arr) {
      //@ts-ignore
      newWords += vowelsEncrypts[item] || item;
    }
    this.textEncrypt = newWords;
    return newWords;
  }

  public static decrypt(strEncrypt: string): string | null {
    if (!this.withoutUppercaseAndAccents(strEncrypt)) return null;

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

  static async copy() {
    return await this.copyText(this.textEncrypt);
  }

  private static withoutUppercaseAndAccents(strEncrypt: string): boolean {
    const REG_EXP =
      /^[a-z\u002C\u002E\u003B\u0589\u00BF\u003F\u00A1\u0021\ñ\s]+$/;
    if (REG_EXP.test(strEncrypt)) return true;
    return false;
  }
}
