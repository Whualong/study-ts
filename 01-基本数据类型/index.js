"use strict";
/*************
@Author wenhualong
ts 基本类型
Boolean
Number
String
Symbol
bigint
null
undefined
void
开启严格的空检查时 null 和 undefined 只能赋值给自身和any类型  *(undefined 可以赋值给void类型 null不可以)
**************/
let flag;
flag = true;
flag = Boolean(1);
let str;
str = "";
str = String(123);
let num;
num = 1;
num = Number('12');
let kong;
kong = null;
let und;
und = undefined;
let vo;
vo = undefined;
function testvoid() {
    return undefined;
}
function testvoid1() {
    return undefined;
}
function testvoid2() {
    alert('haha ');
    return;
}
function throwErr(msg) {
    throw new Error(msg);
}
let symbol = Symbol('1');
let big = 12n;
