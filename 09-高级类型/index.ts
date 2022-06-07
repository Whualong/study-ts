/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-02-18 14:21:25
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-06-06 23:54:02
 * @FilePath: /study-ts/09-高级类型/index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
type Unit = | "Years" 
            | 'year' 
            | 'y' 
            | 'Weeks' 
            | 'Week' 
            | 'w' 
            | 'Days' 
            | 'Day' 
            | 'd' 
            | 'Hours'
            | 'Hour'
            | 'h'
            | 'Minutes'
            | 'Minute'
            | 'm'
            | 'Seconds'
            | 'Second'
            | 's'
            | 'Milliseconds'
            | 'Millisecond'
            | 'ms' ;
type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;

interface Company {
    name : string;
    number: number;
    address : string;
}
interface Ts {
    name:number;
    phone:number;
}

type MixProps<K = any, T = any> = (
    & Omit<K, keyof T>
    & T
);

let mm : MixProps<Company,Ts> = {
    name :12,
    number: 123,
    address:' 34',
    phone : 12
}
const theme = {
    name : '124'
}

type Theme = typeof  theme
let theme1 : Partial<Theme> = {
    
}