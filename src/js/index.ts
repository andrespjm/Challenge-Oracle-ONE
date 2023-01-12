import { Crypt } from "./Encript";

const text = document.querySelector("#text-input") as HTMLTextAreaElement;

const btnEncript = document.querySelector("#encri") as HTMLButtonElement;

const btnDecript = <HTMLButtonElement>document.querySelector("#decri");

const containerText = <HTMLDivElement>document.querySelector("#container-text");

const showErrorMessage = <HTMLDivElement>document.querySelector("#show-error");

const containerMessage = <HTMLDivElement>(
  document.querySelector("#container-message")
);

btnEncript.addEventListener("click", (e) => {
  e.preventDefault();
  showTextEcripted(Crypt.encrypt(text.value));
});

btnDecript.addEventListener("click", (e) => {
  e.preventDefault();
  showTextEcripted(Crypt.decrypt(text.value));
});

function showTextEcripted(textEncripted: string | null) {
  if (!textEncripted) {
    textEncripted = `
    <div id="show-error" class="show-error">
                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_jvki4wd1.json"
                    background="transparent" speed="1" style="width: 200px; height: 200px;" loop
                    autoplay></lottie-player>
                <p>Solo letras minúsculas y sin acento.</p>
            </div>
    `;
  } else {
    textEncripted = `
      <div class="show-encripted">
        <a href="#" id="btn-copy" class="btn-copy" title="Copiar"><i class="fa-sharp fa-solid fa-clone"></i></a>
        ${textEncripted}
      </div>
    `;
  }
  containerText.innerHTML = `<i class="fa-sharp fa-solid fa-circle-notch fa-spin"></i>`;
  setTimeout(() => {
    containerText.innerHTML = <string>textEncripted;
  }, 1000);
}
