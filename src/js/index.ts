import { Crypt } from "./Encript";
import {
  emptyFieldTemplate,
  errorTextTemplate,
  outputTextTemplate,
  preloader,
} from "./Templates";

const btnEncript = document.querySelector("#encri") as HTMLButtonElement;

const btnDecript = <HTMLButtonElement>document.querySelector("#decri");

const btnCopy = <HTMLButtonElement>document.querySelector("#btn-copy");

const btnClean = <HTMLButtonElement>document.querySelector("#btn-clean");

const text = document.querySelector("#text-input") as HTMLTextAreaElement;

const showText = <HTMLDivElement>document.querySelector("#show-text");

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

  btnCopy.addEventListener("click", async () => {
    btnCopy.innerHTML = await Crypt.copy();
  });

  btnClean.addEventListener("click", async () => {
    text.value = "";
    btnClean.style.display = "none";
    activedBtnEncry = false;
    activedBtnDecry = false;
    if (activedBtn) {
      showText.innerHTML = emptyFieldTemplate();
      btnCopy.style.display = "none";
    }
  });
}

function showTextEcryptedAndDecryted(textEncripted: string | null) {
  const text = !textEncripted
    ? errorTextTemplate()
    : outputTextTemplate(textEncripted);
  showText.innerHTML = preloader();
  btnCopy.style.display = "none";
  btnCopy.innerHTML = `<i class="fa-sharp fa-solid fa-clone"></i>`;

  setTimeout(() => {
    showText.innerHTML = <string>text;
    if (textEncripted) {
      btnCopy.style.display = "block";
    }
  }, 1000);
}
