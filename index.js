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
  console.log(el);
  console.log(el.id);
  setOptions(el.id);
};

buttonArray.map((el) =>
  el.addEventListener("click", (e) => onClickButton(e, el))
);
