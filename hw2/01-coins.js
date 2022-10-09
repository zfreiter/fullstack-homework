/** Exercise 01 - Coins **/
const deleteMoney = (start, valueToDelete) => {
  let count = 0;

  start = start.toFixed(2);
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
  const dollarStr = `${
    dollar != 0 ? `${dollar} ${dollar > 1 ? 'dollars' : 'dollar'}` : ''
  }`;

  const quarter = deleteMoney(input, 0.25);
  input -= quarter * 0.25;
  const qaurterStr = `${
    quarter != 0 ? `, ${quarter} ${quarter > 1 ? 'quarters' : 'quarter'}` : ''
  }`;

  const dime = deleteMoney(input, 0.1);
  input -= dime * 0.1;
  const dimeStr = `${
    dime != 0 ? `, ${dime} ${dime > 1 ? 'dimes' : 'dime'}` : ''
  }`;

  const nickel = deleteMoney(input, 0.05);
  input -= nickel * 0.05;
  nickel;
  const nickelStr = `${
    nickel != 0 ? `, ${nickel} ${nickel > 1 ? 'nickels' : 'nickel'}` : ''
  }`;

  const penny = deleteMoney(input, 0.01);
  const pennyStr = `${
    penny != 0 ? `, ${penny} ${penny > 1 ? 'pennies' : 'penny'}` : ''
  }`;

  const valueToReturn = `$${orignalInput} ==> ${dollarStr}${qaurterStr}${dimeStr}${nickelStr}${pennyStr}`;
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
