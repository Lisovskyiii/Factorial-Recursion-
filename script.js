"use strict";

function factorial(a) {
  if (check(a) != undefined) {
    return check(a);
  }
  if (a === 1 || a <= 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}
function check(e) {
  if (!Number.isInteger(e) || !isFinite(e)) {
    return `Введено неверное сообщение: ${e}`;
  }
}

console.log(factorial(3));
