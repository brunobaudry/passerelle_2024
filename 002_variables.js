/* LET allows you to define a variable in reduced scope. Inside blocks {}

LET vous permet de définir une variable dans un champ d'application réduit. À l'intérieur des blocs {}

Mit LET können Sie eine Variable in reduziertem Umfang definieren. Innerhalb von Blöcken {} */

// Old JS
var myNameScript = "bruno VAR";
let myNewNameScript = "Bruno LET";
try{
    if(true){
        let myScopedVariable = "I am in scope";
        var myGlobalVariable = "I am global";
       //  console.log(myNameScript, myNewNameScript);
       //  console.log("myScopedVariable declared inside a block", myScopedVariable);
       // console.log("myGlobalVariable declare inside a block", myGlobalVariable);
   }
   console.log(myNameScript, myNewNameScript);
   console.log(myScopedVariable);
   
}catch(error){
    console.info(error);
    alert("missing varaible");
}
console.log(myGlobalVariable);


/**
Add the same in browser dev
Fügen Sie dasselbe im Browser-Entwickler hinzu
Ajoutez la même chose dans le navigateur dev 
*/
// console.log(myScopedVariable);
// console.log(myGlobalVariable);