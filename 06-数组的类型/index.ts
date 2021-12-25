let numArr : number [] = [1,2343,34]
numArr.push('9') // 报错
numArr.push(10) 
numArr.push(null)
numArr.push(undefined)


let strArr : Array<string> = [ '23','56']
strArr = []
strArr.push('10')

let anyArr : any [] = [1,'234',{},null]

// 类数组
interface Arg {
  [index:number]: any;
  length : number ;
  callee : Function;
}
function argsFun (){
  let argArr : IArguments  = arguments;
  let arg1 : Arg = arguments;
}

