"use strict";
/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-02-10 15:25:48
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-06-02 13:20:00
 * @FilePath: /study-ts/04-枚举类型/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved.
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1.4] = "Up";
    Direction[Direction["Down"] = 2.4] = "Down";
    Direction[Direction["Left"] = 3.4] = "Left";
    Direction[Direction["Right"] = 4.4] = "Right";
})(Direction || (Direction = {}));
;
let directions = [0 /* Up */, 1 /* Down */];
let b;
b = 0;
