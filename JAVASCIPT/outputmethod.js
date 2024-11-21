//output method

//1.document write
//br means throw the statement in the next line
//&nsb means give the spaces

document.write("hi hello");
document.write("hi hello");
document.write("hi hello");

//2.document writeln == small space b/wn two sentence

document.writeln("this is ln");
document.writeln("this is ln");
document.writeln("this is ln");

//3.cosole.log

console.log("hi this is console");

//4.alert == it gives one button 

alert("hi good morng");

//5.confirm== it gives two buttons one ok and cancel

confirm("are you 18+");

//6.promt== it always takes input from the user

prompt("print hi or hello");

//to print promt in console 

let b=prompt("print hi orhello");
console.log(b);
// task

let myName=prompt("enter your name");
console.log("my name is"+myName);

let fName=prompt("enter your fname");
console.log("my father name is"+fName);

let mName=prompt("enter your mname");
console.log("my mother name is"+mName);


let pName=prompt("enter your pname");
console.log("my place name is"+pName);

let age=prompt("enter your age");
if(age>18)
{
    console.log("your grown")
}
else{
    console.log("child");
}