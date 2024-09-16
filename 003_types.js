let num = 99;
// num = false;
console.log(typeof num);
// console.log(typeof bool);

// num = '0'; // changing the object type
let bool = false; // bool = 0;
console.log('typeof bool-->',typeof bool);
let str = "hello";
console.log('typeof str-->',typeof str);
let arr = [99,'1',true,3];
arr[1] = 88;
console.log('arr[0]-->',arr[0], 'arr[1]-->',arr[1]);


console.log('typeof arr-->',typeof arr);
// let arr = [0,"1",true];
let obj = {
    name : 'Pikachu',
    age : 8
};
console.log('typeof obj-->',typeof obj);
console.log('obj.age-->',obj.age);
console.log('obj.name-->',obj.name);

/**
 * objects
 */
console.log( obj.name, obj.age);
console.log( obj );