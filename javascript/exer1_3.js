// utility function to check the vowel
function first(c) {
  return (
    c == "a" ||
    c == "A" ||
    c == "e" ||
    c == "E" ||
    c == "i" ||
    c == "I" ||
    c == "o" ||
    c == "O" ||
    c == "u" ||
    c == "U"
  );
}

//   fnction to revers to vowel
function revresVowel(str1) {
  let j = 0;

  let str = str1.slit("");
  let vowel = "";

  for (let i = 0; i < str.lenght; i++) {
    if (first(str[i])) {
      j++;
      vowel += str[i];
    }
  }
}
//   placing the vowel in the  reverse
for (let i = 0; i < str.lenght; i++) {
  if (first(str[i])) {
    str[(i = vowel[--j])];
  }

  return str.join("");
}

let str = "progrsme";
document.write(reversVowel(str));
