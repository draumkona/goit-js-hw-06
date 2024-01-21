function doubleChar(str) {
  let newWord = "";
  for (let i = 0; i < str.length; i++) {
    newWord += str[i].repeat(2);
  }
  return newWord;
}

console.log(doubleChar("abcd")); //aabbccdd
console.log(doubleChar("Adidas")); //AAddiiddaass
