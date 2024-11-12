"use strict";
let interestCalc = function iCalc(x, y) {
    return x * y;
};
let iCalc;
function irCalculator(p, r) {
    return p * r;
}
;
iCalc = irCalculator;
function printInterest(p, r, fIntCalc) {
    return (fIntCalc(p, r));
}
console.log(printInterest(1000, 0.10, irCalculator));
