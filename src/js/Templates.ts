export const emptyFieldTemplate = (): string => {
  return `
    <div id="container-message" class="container-message">
        <img src="./images/munieco.png" alt="">
        <p class="error">Ningún mensaje fue encontrado</p>
        <p class="message">Ingrese el texto que desea encriptar o desencriptar</p>
    </div>
    `;
};

export const errorTextTemplate = (): string => {
  return `
    <div id="show-error" class="show-error">
      <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_jvki4wd1.json" background="transparent" speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>
    <p class="error">Solo letras minúsculas y sin acento.</p>
    </div>
    `;
};

export const outputTextTemplate = (text: string): string => {
  return `
    <div class="show-encripted">
        ${text}
    </div>
    `;
};

export const preloader = (): string => {
  return `
    <i class="fa-sharp fa-solid fa-circle-notch fa-spin"></i>
    `;
};
