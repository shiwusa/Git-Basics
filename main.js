'use strict';

const findRoots = require("./findRoots");
const storeCoeffs = require("./interactiveMode");

const argsArr = storeCoeffs();
findRoots(argsArr);
