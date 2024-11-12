let interestCalc = function iCalc(x: number, y: number) {
    return x * y;
};
let iCalc: (x: number, y: number) => number;

function irCalculator(p: number, r: number) {
    return p * r;
};

iCalc = irCalculator;

function printInterest(p: number, r: number, fIntCalc: Function) {
    return (fIntCalc(p, r));
}

console.log(printInterest(1000, 0.10, irCalculator));
