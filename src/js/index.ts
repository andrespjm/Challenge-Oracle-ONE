import { Encript } from "./Encript";

const text = document.querySelector("#text-input") as HTMLTextAreaElement;
const btnEncript = document.querySelector("#encri") as HTMLButtonElement;
const containerText = <HTMLDivElement>document.querySelector("#container-text");

btnEncript.addEventListener("click", (e) => {
  e.preventDefault();
  const encript = new Encript(text.value);
  showTextEcripted(encript.encript());
});

function showTextEcripted(textEncripted: string) {
  const container = document.createElement("div");
  container.className = "show-encripted";
  container.innerHTML = textEncripted;
  containerText.innerHTML = "";
  containerText.append(container);
}
