/** Exercise 02 - Reverse **/

// Add your code here
const reverse = document.getElementById("reverse");
const input = document.getElementById("input");
const div = document.getElementsByTagName("div");
let answer = document.createElement("p");
answer.textContent = "";
answer.style.marginTop = "24px";
div[1].append(answer);

const reverseNumber = (numberToReverseArg) => {
  let reverse = 0;
  let digitToAdd = 0;
  let numberToReverse = numberToReverseArg;

  while (numberToReverse !== 0) {
    digitToAdd = numberToReverse % 10;
    reverse = reverse * 10 + digitToAdd;
    numberToReverse = Math.floor(numberToReverse / 10);
  }
  return reverse;
};

reverse.addEventListener("click", () => {
  const validateLen = input.value.toString().length;
  const validateNum = Number.isInteger(input.value);
  if (validateLen === 8 && validateNum) {
    answer.style.color = "green";
    answer.textContent = `${input.value}-->${reverseNumber(input.value)}`;
  } else {
    answer.style.color = "red";
    answer.textContent = "ERROR: Please input an 8-digit number";
  }
});
