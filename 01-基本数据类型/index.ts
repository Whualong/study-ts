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

let flag : boolean ;
flag = true
flag = Boolean(1)

let str : string;
str = ""
str = String(123)

let num : number
num = 1
num = Number ('12')

let kong : null;
kong = null 

let und : undefined
und = undefined

let vo : void

vo = undefined

function testvoid () : void{
  return undefined 
}

function testvoid1 () : void{
  return undefined 
}

function testvoid2 () : void{
  alert('haha ') ;
  return 
}

function throwErr ( msg : string ) : never {
  throw new Error( msg )
}

let symbol : Symbol = Symbol('1')

let big : bigint = 12n
