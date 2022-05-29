/*************
@Author wenhualong
Array
Tuple
**************/

let numarr : Array<number> ;
numarr = [1,23]
let arr : [ string,number ]
arr = ['',4]
arr = [ "测试新的元组" , 4554]

interface Tuple extends Array<string | number> {
    0: string;
    1: number;
    length: 2;
}

let arrnum : Tuple
arrnum = ['',2]
