/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2021-12-27 13:59:35
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-06-01 13:21:44
 * @FilePath: /study-ts/05-接口/index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
interface Person {
  readonly 'name' : string  ;
  'age' : number;
  'height'?: number;
  // [key : string] : string | number| undefined ;
}

type Per = {
  readonly 'name' : string  ;
  'age' : number;
  'height'?: number;
}

let person : Person = {
  name : 'zhangtao',
  age : 13 ,
  height : 170 ,
  // weight : 126 
}

person.age = 34;

const per1 : Per = {
  name : 'ha',
  age : 12,
  height : 12,
}

class Test implements Person{
    version = 1
    name : string = 'tom'
    age : number = 12
    height : number = 23
    constructor (){

    }
}

let sm : Direction;
sm = 0
