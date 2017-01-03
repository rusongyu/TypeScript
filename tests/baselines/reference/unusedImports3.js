//// [tests/cases/compiler/unusedImports3.ts] ////

//// [file1.ts]

export class Calculator {
    handleChar() {}
}

export function test() {

}

export function test2() {

}

//// [file2.ts]
import {Calculator, test, test2} from "./file1"

test();
test2();

//// [file1.js]
"use strict";
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.handleChar = function () { };
    return Calculator;
}());
exports.Calculator = Calculator;
function test() {
}
exports.test = test;
function test2() {
}
exports.test2 = test2;
//// [file2.js]
"use strict";
var file1_1 = require("./file1");
file1_1.test();
file1_1.test2();
