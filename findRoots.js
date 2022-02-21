'use strict';

const findRoots = ([a, b, c]) => {
    const D = b * b - 4 * a * c;
    const equation = `Equation is: (${a})x^2 + (${b})x + (${c}) = 0`
    if ( isNaN(D) ) {
        console.log("Incorrect input");
    } else if ( D < 0 ) {
        console.log(`${equation}
There is no roots`);
    } else if ( D === 0 ) {
        let result = (-b + Math.sqrt(D)) / (2 * a);
        console.log (`${equation}
There is 1 root: ${result}`);
    } else if ( D > 0 ) {
        let result1 = (-b + Math.sqrt(D)) / (2 * a);
        let result2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log(`${equation}
There are 2 roots:
x1 = ${result1}
x2 = ${result2}`);
    }
}

module.exports = findRoots;
