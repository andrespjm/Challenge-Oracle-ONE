var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { ClipboardFn } from "./Clipboard.js";
export class Crypt extends ClipboardFn {
  static encrypt(strDecrypt) {
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
  static decrypt(strEncrypt) {
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
  static copy() {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.copyText(this.textEncrypt);
    });
  }
  static withoutUppercaseAndAccents(strEncrypt) {
    const REG_EXP =
      /^[a-z\u002C\u002E\u003B\u0589\u00BF\u003F\u00A1\u0021\ñ\s]+$/;
    if (REG_EXP.test(strEncrypt)) return true;
    return false;
  }
}
