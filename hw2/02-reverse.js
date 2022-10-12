/** Exercise 02 - Reverse **/

// Add your code here
const reverse = document.getElementById("reverse");
const input = document.getElementById("input");
const div = document.getElementsByTagName("div");
let answer = document.createElement("p");

answer.textContent = "";
answer.style.marginTop = "24px";
div[1].append(answer);

const reverseNumber = (numberToReverse) => {
  let rev = 0;
  let digitToAdd = 0;

  while (numberToReverse !== 0) {
    digitToAdd = numberToReverse % 10;
    rev = rev * 10 + digitToAdd;
    numberToReverse = Math.floor(numberToReverse / 10);
  }
  return rev;
};

reverse.addEventListener("click", () => {
  const validate = input.value.toString().length;

  if (validate === 8) {
    answer.style.color = "green";
    answer.textContent = `${input.value}-->${reverseNumber(input.value)}`;
  } else {
    answer.style.color = "red";
    answer.textContent = "ERROR: Please input an 8-digit number";
  }
});
