/*Como comenzar a aprender un lenguaje

sintaxis ->

var, tipos, iteraciones, decisiones, funciones, metodos
palabras claves
*/
//Define Variables

var y;
let x;

/*Data Types
		number
		string
		array
		objects
		null
		undefined
		not a number -> NaN 'Nan' 0/0 undefined 'hello' '2015/25/01'
		boolean
*/

//Loops
//FOR Loop
for(var i = 0; i < 5; i++) {
 console.log(i);
}

var object = {};
//FOR OF Loop
for (var variable of object) {
  //statement
}
//FOR IN Loop
for (var variable in object) {
  //statement
}
//Example
	let arr = [3, 5, 7];
	arr.foo = "hello";

	for (let i in arr) {
	   console.log(i); // logs "0", "1", "2", "foo"
	}

	for (let i of arr) {
	   console.log(i); // logs "3", "5", "7"
	}

//WHILE Loop
while (i < 10) {
    text += "The number is " + i;
    i++;
}

let arr = [3, 5, 7];
arr.foo = "hello";

arr.forEach(function (element, index) {
    console.log(element); // logs "3", "5", "7"
    console.log(index);   // logs "0", "1", "2"
});

// or with Object.keys()

Object.keys(arr).forEach(function (element, index) {
    console.log(arr[element]); // logs "3", "5", "7", "hello"
    console.log(arr[index]);   // logs "3", "5", "7", undefined
});


Decisions

switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        default code block
}

if (condition){
	//code
}
else if (condition2) {
	//code
}
else {
	//code
}

Functions

function name(parameter1, parameter2, parameter3) {
    code to be executed
}
