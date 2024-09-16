let num = 0;
num = '0';//<---
// num = false;
console.info(typeof num);
let num2 = false;
console.log('num == false :: ', num == num2);
console.log("num === false :: ", num === num2);
let arr = [0,1,2,3];
console.log( arr == [0,1,2,3] );
let obj = {
    name:'Pikachu',
    age: 8
};
console.log({
    name:'Pikachu',
    age: 8
} == obj);
let obj2 = {name:'Pikachu',age: 8};
console.log(obj == obj2);
console.log(
    obj.name === 'Pikachu' && obj.age === 8
)
console.log(
    obj.name === obj2.name && obj.age === obj2.name
)
// 
// Compare if variable is equal
// 
// console.log('num == 0 :: ', num == 0);
// console.log("num == '0' :: ",num == '0');
// console.log("bool == false :: ",bool == false,"bool == 0", bool == 0);

// console.log('str == "hello" :: ',str == "hello", "str == 'hello' :: ",str == 'hello'); // single and double are the same;
// const str2 = 'hello';
// console.log('str == str2 :: ',str == str2, 'str== str2 :: ',str== str2); // single and double are the same;


// 
// Compare if variable is strictly (the type is also equal) equal
// 
// console.log("num === 0 :: ", num === 0);
// console.log("num === '0' :: ", num === '0');
// console.log("bool === false :: ",bool === false,"bool === 0 :: ", bool === 0);

// console.log('str === "hello" :: ', str === "hello", "str === 'hello' :: ", str === 'hello'); // single and double are the same;
// console.log("str === str2 :: ", str === str2); // single and double are the same;

// 
// object are compared by reference, while primitives are compared by value
// 
// console.log("[0,1,2,3] == arr :: ", [0,1,2,3] == arr);
// console.log({
//     name:'Pikachu',
//     age: 8
// }== obj);
// let arr2 = arr; 
// let obj2 = obj;
// console.log("arr == arr2 :: ", arr == arr2, "arr === arr2 :: ", arr === arr2);
// console.log("obj == obj2 :: " ,obj == obj2, "obj === obj2 :: " , obj === obj2);