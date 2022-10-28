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
