/** Exercise 01 - Coins **/
const deleteMoney = (startArg, valueToDeleteArg) => {
  let count = 0;
  let start = startArg.toFixed(2);
  let valueToDelete = valueToDeleteArg;

  //start = start.toFixed(2);
  while (start >= valueToDelete) {
    start = (start - valueToDelete).toFixed(2);
    count += 1;
  }
  return count;
};

const calculateChange = (input) => {
  if (input >= 10) {
    return `$${input} ==> Error: the number is too large`;
  }

  const orignalInput = input;

  const dollar = deleteMoney(input, 1);
  input -= dollar;
  const dollars = dollar > 1 ? "dollars" : "dollar";
  const dollarStr = `${dollar != 0 ? `${dollar} ${dollars}` : ""}`;

  const quarter = deleteMoney(input, 0.25);
  input -= quarter * 0.25;
  const quarters = quarter > 1 ? "quarters" : "quarter";
  const quarterStr = `${quarter != 0 ? `, ${quarter} ${quarters}` : ""}`;

  const dime = deleteMoney(input, 0.1);
  input -= dime * 0.1;
  const dimes = dime > 1 ? "dimes" : "dime";
  const dimeStr = `${dime != 0 ? `, ${dime} ${dimes}` : ""}`;

  const nickel = deleteMoney(input, 0.05);
  input -= nickel * 0.05;
  const nickels = nickel > 1 ? "nickels" : "nickel";
  const nickelStr = `${nickel != 0 ? `, ${nickel} ${nickels}` : ""}`;

  const penny = deleteMoney(input, 0.01);
  const pennies = penny > 1 ? "pennies" : "penny";
  const pennyStr = `${penny != 0 ? `, ${penny} ${pennies}` : ""}`;

  const valueToReturn = `$${orignalInput} ==> ${dollarStr}${quarterStr}${dimeStr}${nickelStr}${pennyStr}`;
  return valueToReturn;
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
