// Declaración de variables
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const copyButton = document.getElementById('copyButton');
const validationMessage = document.getElementById('validationMessage');

// Función de validación
function validateText(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

// Función de encriptar
function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// Función de descifrar
function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

// Evento de clic para el botón de cifrar
encryptButton.addEventListener('click', () => {
    const text = inputText.value;
    if (validateText(text)) {
        outputText.value = encryptText(text);
        validationMessage.style.display = 'none';
    } else {
        validationMessage.style.display = 'block';
    }
});

// Evento de clic para el botón de descifrar
decryptButton.addEventListener('click', () => {
    const text = inputText.value;
    if (validateText(text)) {
        outputText.value = decryptText(text);
        validationMessage.style.display = 'none';
    } else {
        validationMessage.style.display = 'block';
    }
});

// Evento de clic para el botón de copiar
copyButton.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});