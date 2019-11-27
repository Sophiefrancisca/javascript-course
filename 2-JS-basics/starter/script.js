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

/*
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
*/

/**********************************
 * Operator preceedence
 */
/*
 var now = 2019;
 var yearSophie = 1997;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearSophie >= fullAge; // true
 console.log(isFullAge);

 // Grouping
 var ageSophie = now - yearSophie;
 var ageRicardo = 25;
 var avarage = (ageSophie + ageRicardo) / 2;
console.log(avarage);

// Multiple assigments
var x, y;
x = y = (3+5) * 4 - 6; // 8 * 4 - 6 // 33 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 120;
var heightMark = 1.72;

var massJohn = 63;
var heightJohn = 1.68;

var BMImark = massMark / (heightMark * heightMark);
var BMIjohn = massJohn / (heightJohn * heightJohn);
console.log(BMImark, BMIjohn);

var BMIhigher = BMImark > BMIjohn;
console.log(BMIhigher);

console.log ('Is Marks BMI higher than Johns? ' + BMIhigher);
*/

/**********************************
 *  If / else statements
 */
 /*
 var firstName = 'Sophie';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :)');
 }

 var isMarried = true;
 if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 120;
var heightMark = 1.72;

var massJohn = 63;
var heightJohn = 1.68;

var BMImark = massMark / (heightMark * heightMark);
var BMIjohn = massJohn / (heightJohn * heightJohn);

if (BMImark > BMIjohn) {
    console.log('Mark\'s BMI is higher than John\'s. ')
} else {
    console.log('John\'s BMI is higher than Mark\'s. ')
}
*/

/********************************
 * Boolean logic
 */
/*
var firstName = 'John';
var age = 20;

if (age < 13){
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
}
 else{
    console.log(firstName + ' is a man.');
}
*/
/*******************************
 * The Ternary Operator and Switch Statements
 */
