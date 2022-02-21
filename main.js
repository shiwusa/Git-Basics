'use strict';

const prompt = require("prompt-sync")();
const findRoots = require("./findRoots");
const interactive = require("./interactiveMode");
const nonInteractive = require("./non-interactiveMode");

const mode = () => {
    const progMode = parseInt(prompt("Choose the mode: "));
    if (progMode === 1) {
        const argsArr = interactive();
        findRoots(argsArr);
        mode();
    } else if (progMode === 2) {
        const argsArr = nonInteractive();
        if (argsArr === false){
            mode();
        } else {
        findRoots(argsArr);
        mode();
        }
    } else {
        console.log("Program stopped");
        process.exit(1);
    }
}
 mode();
