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
/*
 // Ternary operator
 var firstName = 'John';
 var age = 16;

 age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer' : 'juice'
 console.log(drink);

 /* if (age >= 18){
     var drink = 'beer'
 } else {
     var drink = 'juice'
 }*/
/*
// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
         console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');

}
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
} */

/*******************************
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, ' ', NaN
// truthy values: NOT falsy values
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23'){
    console.log('The == operator does type coercion!');
}
*/

/*
//John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
var teamJohn = (120 + 120 + 120) / 3;
console.log(teamJohn);


var teamMike = (120 + 120 + 120) / 3;
console.log(teamMike);

if (teamMike > teamJohn) {
    console.log('Team Mike wins!');
} else if (teamJohn > teamMike){
    console.log('Team John wins!');
} else {
    console.log('It\'s a draw!');
}

var teamMary = (120 + 120 + 120) / 3;
console.log(teamMary);

if (teamJohn > teamMary && teamJohn > teamMike) {
    console.log('Team John wins with a score of ' + teamJohn);
} else if (teamMary > teamJohn && teamMary > teamMike) {
    console.log('Team Mary wins with a score of ' + teamMary);
} else if (teamMike > teamMary && teamMike >  teamJohn) {
    console.log('Team Mike wins with a score of ' + teamMike);
} else {
    console.log('It\'s a draw between all the teams.');
}
*/

/****************************
 * Functions
 */
/*
 function calculateAge(birthYear){
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);


 function yearsUntilRetirement(year, firstName) {
     var age = calculateAge(year);
     var retirement = 65 - age;
     
     if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1948, 'Mike');
 yearsUntilRetirement(1969, 'Jane');
 */





 /********************************
  * Function Statements and Expressions
  */
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver': 
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

*/


/***************************************************
 * Arrays
 */
/*
 // Initialize new array
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 // Mutate array data
 names[1] = 'Ben';
 names [names.length] = 'Mary';
 console.log(names);

 // Different data types
 var john = ['John', 'Smith', 1990, 'designer', false];

 john.push('blue');
 john.unshift('Mr.');
 console.log(john);

 john.pop();
 john.pop();
 john.shift();
 console.log(john);

 console.log(john.indexOf(23));


 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John IS a designer.';
console.log(isDesigner);
*/


/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124 (20%), $48 (15%) and $268 (10%)

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);

*/

/*********************************************
 * Objects and properties
 */

 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'Teacher',
     isMarried: false
 };

 console.log(john.firstName);
 
 console.log(john['lastName']);
