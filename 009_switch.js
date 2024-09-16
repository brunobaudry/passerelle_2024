//
// SWITCH
//
// The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.

// A little bit similar to if/else

let student = 'sdfsdf'; // mamuu1
let language = 'Français';
switch(student){
    case 'georp1' : language = 'tamilisch';
        break;
    case 'miakh1' : language = 'pastunisch';
        break;
    case 'sheih1' : ;
    case 'shein1' : language = 'arabisch';
        break;
    case 'lisui1' : ;
    case 'smyro1' : ;
    case 'honcv1' : ;
    case 'blazv1' : language = 'ukrainisch';
        break;
    default: language = 'deutsch';
}
console.log(student, language );