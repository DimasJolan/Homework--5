"use strict";

const n = +prompt("Введите первое число", 0);
const p = +prompt("Введите второе число", 0);
if (p>n) {
    alert("Второе число должно быть меньше первого")
}
else {

function factorial(a) {
    return a ? a * factorial(a - 1) : 1;
  }
  
const nFact = factorial(n);
const pFact = factorial(p);
alert (pFact + nFact);}




