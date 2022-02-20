'use strict'
const prompt = require("prompt-sync")();

const inputFromConsole = (arg) => {
    while (true) {
        const coeff = prompt(`Enter ${arg}: `);
        const coeffValue = parseInt(coeff);
        if (arg === "a" && coeffValue === 0) {
            console.log(`Arg "a" cannot equal 0`);
        } else if (isNaN(coeffValue)) {
            console.log("Smth went wrong. Enter coefficient once more.");
        } else return coeffValue;
    }
};

const storeCoeffs = (...args) => {
    const argArr = [...args] = ['a', 'b', 'c'];
    const valuesArr = [];
    argArr.forEach(coeff => {
        const value = inputFromConsole(coeff);
        valuesArr.push(value);
    });
    console.log(valuesArr);
    // return valuesArr;
};

storeCoeffs();
