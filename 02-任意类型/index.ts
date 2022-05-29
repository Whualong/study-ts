/*************
@Author wenhualong
any
unknown
never
**************/

let what : any
what = 123
what = true
what = "haha"
function test ( ) : any{
  return "124"
}
function test1 ( ) : any{
  return true
}
function test2 ( ) : any{
  return Math.min
}
let unk : unknown;
unk = new Date()
what.getMonth()
if( unk instanceof Date){
  unk.getMonth()
}
let nev : never;
function terr() : never {
  throw new Error()
}
nev = terr()
let empty : never[];
empty =[ ]
