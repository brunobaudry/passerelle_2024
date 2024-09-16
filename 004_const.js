const num = 0;
// num = 1;
// num = '0'; // changing the object type
const bool = false;
// bool = true;
let str = "hello";
str = "hallo";
console.info('Primitives (basic type) constances');
console.log( num );
console.log( bool );
console.log( str );
const arr = [0,1,2,3];
arr[0]= 99;
arr[1] = 'yo';
arr = [true, false];


str = "Hallo";
const arr = [0,1,2,3];
const obj = {
    name:'Pikachu',
    age: 8
};
const nullissimus = null;
// nullissimus = 8; // null aswell as undefined are primitives
console.info('By ref types constances');
console.log('arr-->', arr );
console.log('obj-->', obj );
console.log('nullissimus-->', nullissimus );

num = 1;
bool = true;
str = 'HALLO';

/** OBJECTS canot be reassigned, but can be changed. 
 * Assigning a variable or const is equal to setting a pointer to the computer's memory.
 * *********************/
console.info('Objects Constants cannot change their reference');
arr = [0,1,2,3,4];
arr.push(4);
console.log( arr );

obj = {};
obj.age = 10;
console.log( obj );