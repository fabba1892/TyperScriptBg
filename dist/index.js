"use strict";
function irCalculator(p, r, returnValue) {
    if (returnValue === "returnString") {
        return p * r;
    }
    else {
        return +p * +r;
    }
}
;
let investment = irCalculator(1000, 0.10, "returnNumber");
console.log("Interest is " + (investment * 2));
