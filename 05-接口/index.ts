interface Person {
  readonly 'name' ?: string  ;
  'age' : number;
  'height' ?: number;
  [propName : string] : string | number | undefined;
}

let person : Person = {
  name : 'zhangtao',
  age : 13 ,
  height : 170 ,
  weight : 126 
}

person.age = 34;

