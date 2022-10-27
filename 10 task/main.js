import { one, two, three, four, five } from "./modules/numbers.js";
import { composition } from "./modules/composition.js";
import { division } from "./modules/division.js";
import { substraction } from "./modules/substraction.js";
import { multiplication } from "./modules/multiplication.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
