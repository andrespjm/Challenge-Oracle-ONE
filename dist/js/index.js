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
import { Crypt } from "./Encript.js";
import {
  emptyFieldTemplate,
  errorTextTemplate,
  outputTextTemplate,
  preloader,
} from "./Templates.js";
const text = document.querySelector("#text-input");
const btnEncript = document.querySelector("#encri");
const btnDecript = document.querySelector("#decri");
const btnCopy = document.querySelector("#btn-copy");
const containerText = document.querySelector("#container-text");
const showText = document.querySelector("#show-text");
const containerMessage = document.querySelector("#container-message");
document.addEventListener("DOMContentLoaded", main);
function main() {
  showText.innerHTML = emptyFieldTemplate();
  btnEncript.addEventListener("click", (e) => {
    e.preventDefault();
    showTextEcryptedAndDecryted(Crypt.encrypt(text.value));
  });
  btnDecript.addEventListener("click", (e) => {
    e.preventDefault();
    showTextEcryptedAndDecryted(Crypt.decrypt(text.value));
  });
  btnCopy.addEventListener("click", () =>
    __awaiter(this, void 0, void 0, function* () {
      btnCopy.innerHTML = yield Crypt.copy();
    })
  );
}
function showTextEcryptedAndDecryted(textEncripted) {
  const text = !textEncripted
    ? errorTextTemplate()
    : outputTextTemplate(textEncripted);
  showText.innerHTML = preloader();
  btnCopy.style.display = "none";
  btnCopy.innerHTML = `<i class="fa-sharp fa-solid fa-clone"></i>`;
  setTimeout(() => {
    showText.innerHTML = text;
    if (textEncripted) {
      btnCopy.style.display = "block";
    }
  }, 1000);
}
