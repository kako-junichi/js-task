"use strict";

for (var num = 0; num >= 0 && num <= 100; num++ && num !== 0) {
  if (num % 4 === 0 && num % 8 !== 0) {
    console.log('Fizz');
  } else if (num % 8 === 0 && num % 4 === 0 && num !== 0) {
    console.log('FizzBuzz');
  } else {
    console.log(num);
  }
}