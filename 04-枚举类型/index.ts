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
enum Direction {
    Up = 1.4,
    Down,
    Left,
    Right
};
// let a1 : Direction  = Direction.Up

const enum Direciton1 {
    Up,
    Down,
    Left,
    Right
}
let directions = [ Direciton1.Up,Direciton1.Down]
type c  = 0 
let b : c
b = 0
