function encodeAndDecodeMessages() {
  const buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", encode);
  buttons[1].addEventListener("click", decode);

  function encode() {
    let encodedMessage = "";
    const textAreas = document.querySelectorAll("textarea");
    const inputMessage = textAreas[0].value;

    for (let i = 0; i < inputMessage.length; i++) {
      let charAscii = inputMessage[i].charCodeAt();
      encodedMessage += String.fromCharCode(charAscii + 1);
    }

    let inputTextArea = textAreas[0];
    inputTextArea.value = "";
    
    let resultTextArea = textAreas[1];
    resultTextArea.value = encodedMessage;
  }

  function decode(e) {
    const resultTextArea = e.target.parentElement.children[1];
    let decodedMessage = resultTextArea.value;
    let resultMessage = "";

    for (let i = 0; i < decodedMessage.length; i++) {
      let char = decodedMessage[i].charCodeAt();
      resultMessage += String.fromCharCode(char - 1);
    }

    resultTextArea.value = resultMessage;
  }
}
