// display and buttons
let counterDisplayElemIn = document.querySelector("#numBoxIn");
let counterDisplayElemOut = document.querySelector("#numBoxOut");
let counterMinusElem = document.querySelector(".minusButton");
let counterPlusElem = document.querySelector(".plusButton");
let counterMinusElem2 = document.querySelector(".minusButton");
let counterPlusElem2 = document.querySelector(".plusButton");

// smaking a variable for the count
let count = 1;
let count2 = 0;

// event listeners for plus an minus buttons
counterPlusElem.addEventListener("click", () => {
  count++;
  counterDisplayElemIn.innerText = count;
});

counterMinusElem.addEventListener("click", () => {
  count--;
  counterDisplayElemIn.innerText = count;
});

counterPlusElem2.addEventListener("click", () => {
  count;
  counterDisplayElemOut.innerText = count;
});

counterMinusElem2.addEventListener("click", () => {
  count;
  counterDisplayElemOut.innerText = count + 1;
});
