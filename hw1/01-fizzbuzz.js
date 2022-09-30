/** Exercise 01 - Fizzbuzz

Write a program that writes all the numbers from 1 to 100, with some exceptions: 
- For numbers divisible by 3, print “fizz” 
- For numbers divisible by 5 (but not 3), print “buzz” 
- For numbers divisible by 3 and 5, print “fizzbuzz”

Use console.log() to write the proper output to the command line.

**/

const fizzbuzz = () => {
  // Add your code here
  for (i = 1; i <= 100; i++) {
    let comment = i;
    if (i % 3 == 0 && i % 5 == 0) {
      comment = "fizzbuz";
    } else if (i % 5 == 0 && i % 3 != 0) {
      comment = "buzz";
    } else if (i % 3 == 0) {
      comment = "Fizz!";
    }
    console.log(comment);
  }
};

fizzbuzz();
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...
