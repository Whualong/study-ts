"use strict";
/*************
@Author wenhualong
any
unknown
never
**************/
let what;
what = 123;
what = true;
what = "haha";
function test() {
    return "124";
}
function test1() {
    return true;
}
function test2() {
    return Math.min;
}
let unk;
unk = new Date();
what.getMonth();
if (unk instanceof Date) {
    unk.getMonth();
}
let nev;
function terr() {
    throw new Error();
}
nev = terr();
let empty;
empty = [];
