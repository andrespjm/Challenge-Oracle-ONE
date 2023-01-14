export const emptyFieldTemplate = () => {
    return `
    <div id="container-message" class="container-message">
        <img src="./images/munieco.png" alt="">
        <p class="error">Ningún mensaje fue encontrado</p>
        <p class="message">Ingrese el texto que desea encriptar o desencriptar</p>
    </div>
    `;
};
export const errorTextTemplate = () => {
    return `
    <div id="show-error" class="show-error">
      <div class="animation">
        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_jvki4wd1.json" background="transparent" speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>
      </div>
    <p class="error">Solo letras minúsculas y sin acento.</p>
    </div>
    `;
};
export const outputTextTemplate = (text) => {
    return `
    <div class="show-encripted">
        ${text}
    </div>
    `;
};
export const preloader = () => {
    return `
    <i class="fa-sharp fa-solid fa-circle-notch fa-spin"></i>
    `;
};
