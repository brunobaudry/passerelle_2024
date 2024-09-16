//
// Functions
//  

myFunc();
function myFunc(){
    console.log("Called myFunc");
}
// 
// functions can get parameters
// 
myFunc2('lazzyness');
myFunc2('Pikachu');
myFunc2('99');
function myFunc2(skdjfhksdj){
    console.log("Called myFunc2 with " + skdjfhksdj);
}

// several params
myFunc3('power', 'Pikachu');
function myFunc3(lazyness, name){
    console.log(name + " called myFunc3 with " + lazyness);
}


// 
// functions can be assigned to a placeholder
// 
// myFunc4(); // error 
const myFunc4 = function(){
    console.log("Called myFunc4");
} 
myFunc4();

console.info('function is a type -------');
console.log(typeof myFunc4, typeof myFunc3);

// 
// Arrow functions (shortcut)
// () => expression
// param => expression
// (param) => expression
// (param1, paramN) => expression
// () => {
//   statements
// }
// param => {
//   statements
// }
// (param1, paramN) => {
//   statements
// }

const arw1 = () => console.log('arw1');
const arw2 = param => console.log('arw2 '+param);
const arw3 = (param) => console.log('arw3 '+param);

const arw4 =(param1, paramN) => console.log('arw4 '+ param1 + paramN );
const arw5 =() => {
    console.log('arw5');
}

const arw6 = param => {
    console.log('arw6 '+param);
}

const arw7 = (param1, paramN) => {
    console.log('arw7 '+ param1 + paramN );
}
console.info('Arrow functions -------');
arw1();
arw2('hello');
arw3('hallo');
arw4('heli','copter');
arw5();
arw6('hallo');
arw7('heli','copter');