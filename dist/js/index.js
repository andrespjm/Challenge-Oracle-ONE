import { Crypt } from "./Encript.js";
const text = document.querySelector("#text-input");
const btnEncript = document.querySelector("#encri");
const btnDecript = document.querySelector("#decri");
const containerText = document.querySelector("#container-text");
const showErrorMessage = document.querySelector("#show-error");
const containerMessage = document.querySelector("#container-message");
btnEncript.addEventListener("click", (e) => {
  e.preventDefault();
  showTextEcripted(Crypt.encrypt(text.value));
});
btnDecript.addEventListener("click", (e) => {
  e.preventDefault();
  showTextEcripted(Crypt.decrypt(text.value));
});
function showTextEcripted(textEncripted) {
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
    containerText.innerHTML = textEncripted;
  }, 1000);
}
