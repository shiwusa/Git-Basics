'use strict';

const fs = require("fs");
const prompt = require("prompt-sync")();

const readFile = (fileName) => {
    fileName = prompt("Enter a name of a file: ");
    const validRegex = /^-?\d+\.?\d*\s\-?\d+\.?\d*\s\-?\d+\.?\d*\s\n$/s;
    try {
        const fileArgs = fs.readFileSync(fileName, "utf-8");
        if (validRegex.test(fileArgs)) {
            const numbersArr = fileArgs.split(" ");
            const argsArr = numbersArr.map(arg => parseInt(arg));
            if (argsArr[0] === 0) {
                console.log(`Arg "a" cannot equal 0.`);
                return false;
            }
            return argsArr;
        } else {
            console.log("Smth wrong with file content");
            return false;
        }
    } catch (err) {
        console.log("Cannot find this file.");
        return false;
    }
}

module.exports = readFile;
