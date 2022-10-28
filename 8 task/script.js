/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  a;
  b;

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  subtraction() {
    return this.a - this.b;
  }

  multiplication() {
    return this.a * this.b;
  }

  division() {
    return this.a / this.b;
  }
}

const calculate = new Calculator(5, 4);

console.log(calculate.sum());
console.log(calculate.subtraction());
console.log(calculate.multiplication());
console.log(calculate.division());
