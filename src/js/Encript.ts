import { Helpers } from "./helpers/Helpers";
import { Validations } from "./helpers/Validations";

export class Crypt {
  private static textDecrypt: string;
  private static textEncrypt: string;

  public static encrypt(strDecrypt: string): string | null {
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

    if (!Validations.withoutUppercaseAndAccents(strDecrypt)) return null;
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
    if (!Validations.withoutUppercaseAndAccents(strEncrypt)) return null;

    const replaceWithChar = ["a", "e", "i", "o", "u"];
    const charToReplace = ["ai", "enter", "imes", "ober", "ufat"];

    for (let i = 0; i < charToReplace.length; i++) {
      strEncrypt = strEncrypt.replace(
        new RegExp(charToReplace[i], "g"),
        replaceWithChar[i]
      );
    }
    this.textDecrypt = strEncrypt;
    return strEncrypt;
  }

  static async copy() {
    return await Helpers.copyText(this.textEncrypt || this.textDecrypt);
  }
}
