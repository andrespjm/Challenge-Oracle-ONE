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
const btnEncript = document.querySelector("#encri");
const btnDecript = document.querySelector("#decri");
const btnCopy = document.querySelector("#btn-copy");
const btnClean = document.querySelector("#btn-clean");
const text = document.querySelector("#text-input");
const showText = document.querySelector("#show-text");
let activedBtn = false;
let activedBtnEncry = false;
let activedBtnDecry = false;
document.addEventListener("DOMContentLoaded", main);
function main() {
  showText.innerHTML = emptyFieldTemplate();
  btnEncript.disabled = true;
  btnDecript.disabled = true;
  text.addEventListener("keyup", (e) => {
    activedBtnEncry = false;
    activedBtnDecry = false;
    if (text.value.length > 0) {
      btnClean.style.display = "block";
      btnEncript.disabled = false;
      btnDecript.disabled = false;
    } else {
      btnClean.style.display = "none";
      btnEncript.disabled = true;
      btnDecript.disabled = true;
      if (activedBtn) {
        showText.innerHTML = emptyFieldTemplate();
        btnCopy.style.display = "none";
      }
    }
  });
  btnEncript.addEventListener("click", (e) => {
    e.preventDefault();
    activedBtn = true;
    if (text.value.length > 0 && !activedBtnEncry) {
      showTextEcryptedAndDecryted(Crypt.encrypt(text.value));
      activedBtnEncry = true;
      activedBtnDecry = false;
    }
  });
  btnDecript.addEventListener("click", (e) => {
    e.preventDefault();
    activedBtn = true;
    if (text.value.length > 0 && !activedBtnDecry) {
      showTextEcryptedAndDecryted(Crypt.decrypt(text.value));
      activedBtnDecry = true;
      activedBtnEncry = false;
    }
  });
  btnCopy.addEventListener("click", () =>
    __awaiter(this, void 0, void 0, function* () {
      btnCopy.innerHTML = yield Crypt.copy();
    })
  );
  btnClean.addEventListener("click", () =>
    __awaiter(this, void 0, void 0, function* () {
      text.value = "";
      btnClean.style.display = "none";
      activedBtnEncry = false;
      activedBtnDecry = false;
      if (activedBtn) {
        showText.innerHTML = emptyFieldTemplate();
        btnCopy.style.display = "none";
      }
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
