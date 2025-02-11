// Data for password generating
const allCharacters = [
  "H",
  "v",
  "/",
  "m",
  ":",
  "-",
  "l",
  "Q",
  8,
  "K",
  2,
  0,
  8,
  ".",
  "=",
  "<",
  "z",
  6,
  3,
  "k",
  ")",
  "A",
  3,
  "(",
  "M",
  "h",
  "a",
  "t",
  "G",
  "B",
  ";",
  6,
  4,
  ">",
  "F",
  "p",
  "g",
  "D",
  "I",
  "?",
  7,
  "u",
  "Y",
  "o",
  "f",
  "i",
  "y",
  "^",
  9,
  "$",
  "c",
  "P",
  "£",
  "_",
  "q",
  "w",
  5,
  "d",
  "S",
  "b",
  "L",
  "N",
  "s",
  "O",
  "U",
  "%",
  1,
  "x",
  "&",
  "e",
  "n",
  "j",
  "J",
  4,
  "!",
  2,
  "R",
  "W",
  1,
  "C",
  5,
  0,
  7,
  "r",
  "T",
  "Z",
  "E",
  "X",
  ",",
  9,
  "V",
];
const lettersAndNumbers = [
  "Y",
  1,
  "l",
  "B",
  "x",
  "i",
  8,
  "r",
  "O",
  "E",
  "A",
  "b",
  "q",
  "d",
  1,
  "y",
  "G",
  "g",
  "Z",
  "T",
  "W",
  "J",
  "K",
  "I",
  "c",
  5,
  "j",
  "t",
  "L",
  "z",
  3,
  "U",
  6,
  "n",
  "s",
  8,
  "N",
  4,
  "h",
  "V",
  7,
  "M",
  "Q",
  9,
  "k",
  "D",
  2,
  "a",
  0,
  "o",
  3,
  "S",
  "f",
  "H",
  "p",
  7,
  2,
  "e",
  "C",
  "R",
  "u",
  "m",
  4,
  "P",
  9,
  6,
  "F",
  "v",
  5,
  "X",
  "w",
  0,
];
const lettersAndSymbols = [
  "i",
  "J",
  "N",
  "P",
  "£",
  "L",
  "-",
  "?",
  "p",
  "T",
  "U",
  "E",
  "X",
  "A",
  "O",
  "u",
  "t",
  ";",
  "o",
  ")",
  "z",
  "l",
  "_",
  ">",
  "V",
  "e",
  "H",
  "!",
  "B",
  "f",
  "C",
  "=",
  "%",
  "h",
  "m",
  "D",
  "d",
  "Y",
  "^",
  "k",
  ".",
  "R",
  "I",
  ":",
  "x",
  "w",
  "Q",
  "&",
  "M",
  "/",
  "b",
  "$",
  "g",
  "c",
  "v",
  "a",
  "j",
  "F",
  "G",
  ",",
  "(",
  "S",
  "Z",
  "W",
  "r",
  "K",
  "n",
  "<",
  "y",
  "s",
  "q",
];
const lettersOnly = [
  "p",
  "t",
  "Y",
  "W",
  "M",
  "U",
  "z",
  "i",
  "N",
  "F",
  "k",
  "E",
  "o",
  "r",
  "x",
  "L",
  "s",
  "y",
  "f",
  "K",
  "d",
  "q",
  "h",
  "j",
  "J",
  "m",
  "A",
  "S",
  "u",
  "P",
  "I",
  "O",
  "v",
  "G",
  "H",
  "g",
  "V",
  "a",
  "C",
  "l",
  "X",
  "b",
  "w",
  "e",
  "D",
  "Q",
  "B",
  "n",
  "c",
  "T",
  "R",
  "Z",
];

// Password generator function
const passwordGenerator = (length, numbers, symbols) => {
  // Input validation
  if (typeof length !== "number" || length <= 0) {
    return "Error: Length must be a positive number.";
  }
  if (typeof numbers !== "boolean" || typeof symbols !== "boolean") {
    return "Error: 'numbers' and 'symbols' must be boolean values.";
  }

  // Determine the character pool based on input
  let characterPool;
  if (numbers && symbols) {
    characterPool = allCharacters;
  } else if (numbers && !symbols) {
    characterPool = lettersAndNumbers;
  } else if (!numbers && symbols) {
    characterPool = lettersAndSymbols;
  } else {
    characterPool = lettersOnly;
  }

  // Generate the password
  let password = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password.push(characterPool[randomIndex]);
  }

  const result = password.join("");
  if (result.length > 40) {
    return result.slice(0, 40) + "\n" + result.slice(40);
  } else {
    return result;
  }
};

// Testing area
// console.log(passwordGenerator(20, true, true)); // Includes all characters
// console.log(passwordGenerator(20, true, false)); // Only letters and numbers
// console.log(passwordGenerator(20, false, true)); // Only letters and symbols
// console.log(passwordGenerator(20, false, false)); // Only letters
