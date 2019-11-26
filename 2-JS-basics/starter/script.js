/*****************************
*Variables and data types
*/
/*
var firstName = 'Sophie';
console.log(firstName);

var lastName = 'van Milaan';
var age = 22;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/


/*****************************
*Variable and type coercion
*/

/*
var firstName = 'Sophie';
var age = 22;

// Type coercion
console.log(firstName + ' ' + age);

var ob, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried);

// Variable mutation
age = 'twenty two';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried);

var lastName = prompt ('What is her last name?');
console.log(firstName + ' ' + lastName);
*/




/***************************************8
 * Basic operators
 */

var now, yearSophie, yearRicardo;
ageSophie = 22;
ageRicardo = 25;

// Math operators
now = 2019;
yearSophie = now - 22;
yearRicardo = now - 25;

console.log(yearSophie);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var sophieOlder = ageSophie < ageRicardo;
console.log(sophieOlder);


// Typeof operator

console.log(typeof sophieOlder);
console.log(typeof ageSophie);
console.log(typeof 'Rircardo is older than Sophie');
var x;
console.log(typeof x);