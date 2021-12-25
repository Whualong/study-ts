function fun (a : number = 123 , b :string) : string{
  return a + b
}
console.log( fun(undefined,"haha" ) );

let add : (a:number,b:string) => string = function (a:number,b:string) : string{
  return a + b;
}
