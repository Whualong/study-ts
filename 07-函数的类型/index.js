"use strict";
function fun(a = 123, b) {
    return a + b;
}
console.log(fun(undefined, "haha"));
let add = function (a, b) {
    return a + b;
};
