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
        findRoots(argsArr);
        mode();
    } else {
        console.log("Invalid mode. Try once more: ");
        mode();
    }
}
 mode();
