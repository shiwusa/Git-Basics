'use strict';

const findRoots = ([a, b, c]) => {
    let D = b * b - 4 * a * c;
    if ( isNaN(D) ) {
        console.log("Incorrect input");
    } else if ( D < 0 ) {
        console.log("There`s no roots");
    } else if ( D === 0 ) {
        let result = (-b + Math.sqrt(D)) / (2 * a);
        console.log ("There`s 1 root: " + result);
    } else if ( D > 0 ) {
        let result1 = (-b + Math.sqrt(D)) / (2 * a);
        let result2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log(`There are 2 roots:\nx1 = ${result1}\nx2 = ${result2}`);
    }
}

module.exports = findRoots;
