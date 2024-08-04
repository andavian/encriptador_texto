const inputElement = document.getElementById("inputText");
const outputElement = document.getElementById("outputText");

function isValidInput(text) {
  // Regex para validar solo letras minúsculas sin acentos
  const regex = /^[a-z\s]+$/;
  return regex.test(text);
}

function validateInput() {
  const inputText = inputElement.value.trim();
  const errorMessage = document.getElementById("errorMessage");

  let validation = isValidInput(inputText);

  validation
    ? (errorMessage.style.display = "none")
    : (errorMessage.style.display = "block");
}

function encrypt(encryptedText) {
  const encryptKeys = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  for (const [key, value] of Object.entries(encryptKeys)) {
    encryptedText = encryptedText.replaceAll(key, value);
  }
  return encryptedText;
}

function decrypt(decryptedText) {
  const decryptKeys = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  for (const [key, value] of Object.entries(decryptKeys)) {
    decryptedText = decryptedText.replaceAll(key, value);
  }
  return decryptedText;
}

function handleEncryption() {
  const inputText = inputElement.value.trim();

  if (isValidInput(inputText)) {
    const encryptedText = encrypt(inputText);
    outputElement.value = encryptedText;
    inputElement.value = "";
    outputElement.style.backgroundImage = "none";
  } else {
    alert(
      "Por favor, ingresa solo letras minúsculas sin acentos y sin caracteres especiales."
    );
    outputElement.value = ""; // Limpiar el área de salida si hay un error
  }
}

function handleDecryption() {
  const inputText = inputElement.value.trim();

  if (isValidInput(inputText)) {
    const decryptedText = decrypt(inputText);
    outputElement.value = decryptedText;
    inputElement.value = "";
    outputElement.style.backgroundImage = "none";
  } else {
    alert(
      "Por favor, ingresa solo letras minúsculas sin acentos y sin caracteres especiales."
    );
    outputElement.value = ""; // Limpiar el área de salida si hay un error
  }
}

function copyToClipboard() {
  outputElement.select();
  outputElement.setSelectionRange(0, 99999); // Para móviles

  // Copiar el texto al portapapeles
  document.execCommand("copy");

  // Deseleccionar el texto
  window.getSelection().removeAllRanges();

  // Mostrar un mensaje o alerta de que el texto se ha copiado
  alert("Texto copiado al portapapeles");
}
