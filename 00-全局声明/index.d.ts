/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-01 13:31:01
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-06-04 23:17:44
 * @FilePath: /study-ts/00-全局声明/index.d.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
declare var global_data : unknown ;
declare let global_jquery : object ;
declare function jQuery (selector:string) : any
declare class Animal {
    name : string ;
    constructor(name:string);
    getName():string
}
interface Person {
    readonly name : string;
    age : number;
    [ key : string] : any;
}
type strOrNum = number| string;