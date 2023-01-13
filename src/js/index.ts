import { Crypt } from "./Encript";
import {
  emptyFieldTemplate,
  errorTextTemplate,
  outputTextTemplate,
  preloader,
} from "./Templates";

const text = document.querySelector("#text-input") as HTMLTextAreaElement;

const btnEncript = document.querySelector("#encri") as HTMLButtonElement;

const btnDecript = <HTMLButtonElement>document.querySelector("#decri");

const btnCopy = <HTMLButtonElement>document.querySelector("#btn-copy");

const containerText = <HTMLDivElement>document.querySelector("#container-text");

const showText = <HTMLDivElement>document.querySelector("#show-text");

const containerMessage = <HTMLDivElement>(
  document.querySelector("#container-message")
);

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

  btnCopy.addEventListener("click", async () => {
    btnCopy.innerHTML = await Crypt.copy();
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
