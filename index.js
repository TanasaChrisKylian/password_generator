// <>

const range = document.querySelector("#number");
const az = document.querySelector("#az");
const aZ = document.querySelector("#AZ");
const numbers = document.querySelector("#numbers");
const special = document.querySelector("#special");
const generate = document.querySelector("#submit");

console.log(generate);

const buttonArray = [az, aZ, numbers, special];
let options = [];

const setOptions = (id) => {
  let bool = false;
  options.map((el) => {
    id === el ? (bool = true) : console.log("");
  });
  if (bool === true) options.splice(options.indexOf(id), 1);
  else options.push(id);
  console.log([...options]);
  bool = false;
};

const onClickButton = (e, el) => {
  setOptions(el.id);
};
const generatesmth = (name) => {
  switch (name) {
    case "az":
      return generateLetter();
    case "AZ":
      return generateCapLetter();
    case "numbers":
      return generateNumber();
    case "special":
      return generateSpecial();
    default:
      console.log("Error 404");
      return;
  }
};
const generateNumber = () => {
  return Math.floor(Math.random() * 10);
};
const generateLetter = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return alphabet[Math.floor(Math.random() * alphabet.length - 1)];
};
const generateCapLetter = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return alphabet[Math.floor(Math.random() * alphabet.length - 1)].toUpperCase;
};
const generateSpecial = () => {
  const specialChar = "?#!^$";
  return specialChar[Math.floor(Math.random() * 5)];
};

const generateFunc = () => {
  let password = "";
  switch (options.length) {
    case 1:
      return;
    case 2:
      return;
    case 3:
      return;
    case 4:
      return;
    default:
      console.log("undefined or null value found");
      return;
  }
};

buttonArray.map((el) =>
  el.addEventListener("click", (e) => onClickButton(e, el))
);

generate.addEventListener("click", (e) => {
  generateFunc();
});
const i2 = 5;
