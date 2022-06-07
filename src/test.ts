/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-04 22:52:44
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-06-04 23:20:29
 * @FilePath: /study-ts/src/test.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
// global_data = 124
// global_jquery = {}
let peg : Animal = {
    name : 'pig',
    getName : function() {
        return this.name as string
    }
}
enum fruit {
    Apple ,
    Banner,
    Peg 
}
let apple : fruit = fruit.Apple
let timeU : Unit = 'Day'