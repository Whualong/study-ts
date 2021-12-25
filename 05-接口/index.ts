interface Person {
  readonly 'name' ?: string ;
  'age' : number ;
  'height' ?: number;
  [propName : string] : string | number ;
}

let person : Person = {
  name : 'zhangtao',
  age : 13 ,
  height : 170 ,
  weight : 126 
}

person.age = 34;
person.name = 'haha' // 报错
