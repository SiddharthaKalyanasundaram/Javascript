'use strict';
let value = "1";
value = 2; //allowed in JS even though a is declared as string in the first statement.

//Nan is a stick number
//ie any operation except exponential of 0, returns Nan if one operand is Nan.
let nanValue = "abc"/1;
alert (nanValue); //returns Nan.
alert(nanValue + 1); //returns Nan.
alert(3 * nanValue); //returns Nan.
alert(nanValue ** 0); //This alone returns 1, since any thing power 0 is 1.

alert(9007199254740991 + 1); // returns 9007199254740992
alert(9007199254740991 + 2); // returns 9007199254740992 ==> Cant save odd numbers after it

alert(9007199254740991n + 1n); // returns 9007199254740992
alert(9007199254740991n + 2n); // returns 9007199254740993

alert('I am a general string');
alert("I am a general string");
alert(`I am extended functionality.  Can do String interpolation. Eg  The value of value is ${value}`);

let a = true; 

let b = null;

let c;
alert(c); // returns undefined.

let d = undefined;
alert(d);

alert(typeof 1); // returns number.
alert(typeof null); // returns object.