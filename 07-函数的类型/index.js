function fun(a, b) {
    if (a === void 0) { a = 123; }
    return a + b;
}
console.log(fun(undefined, "haha"));
