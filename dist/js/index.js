import { Encript } from "./Encript.js";
const text = document.querySelector("#text-input");
const btnEncript = document.querySelector("#encri");
const containerText = document.querySelector("#container-text");
btnEncript.addEventListener("click", (e) => {
  e.preventDefault();
  const encript = new Encript(text.value);
  showTextEcripted(encript.encript());
});
function showTextEcripted(textEncripted) {
  const container = document.createElement("div");
  container.className = "show-encripted";
  container.innerHTML = textEncripted;
  containerText.innerHTML = "";
  containerText.append(container);
}
