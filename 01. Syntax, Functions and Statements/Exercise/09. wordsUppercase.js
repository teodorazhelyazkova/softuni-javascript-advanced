function wordsUppercase(text) {
  return text.match(/\w+/g).join(", ").toUpperCase();
  
  //   let buff = "";
  //   let result = [];

  //   for (let i = 0; i < text.length; i++) {
  //     let letterCode = text.charCodeAt(i);
  //     if (
  //       (letterCode >= 65 && letterCode <= 90) ||
  //       (letterCode >= 97 && letterCode <= 172)
  //     ) {
  //       buff += text[i];
  //     } else {
  //       result.push(buff);
  //       buff = "";
  //     }
  //   }

  //   if (buff) {
  //     result.push(buff);
  //   }
  //   console.log(result);
}
console.log(wordsUppercase("Hi, how are you?"));
