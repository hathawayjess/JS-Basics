var five = 5;  //This is an expression that evaluates to 5 and 
               //is assigned to the variable 'five'

var ten = five + 5; //This expression evaluates to 10 and is
                    // assigned to the variable 'ten'

(10 * 10);      //This is an expression that evaluates to 100 and 
                //does nothing with the result.

//An expression produces a value

//Comparison operators are always Boolean values

//ex:
var x = 5;
var y = 10;

 (x === y) //false
 (x != y)  //true
 (x > y)  //false


//We can also compare Boolean

 var isLoggedIn = true;
 (isLoggedIn == true);   //true
 (isLoggedIn == false);  //false
 (isLoggedIn != true);   //false
 (isLoggedIn != false);  //true

 //We can compare strings

 ("Jared" == "Jared");   //true
 ("Jared" != "Jared");   //false

*******************************************

            == vs ===

//What happens when we compare strings and numbers?

("Jared" == 10);  //false

//What if the string looks like a number?

("10" == 10);  //true ?

//Always use a === & !==
("10" === 10);  //false
("10" !== 10);  //true

//=== will first check type, is more specific



********If statements**********

var isLoggedIn = true;

if (isLoggedIn == true) {
	//Show username
} else {
	//Show Login button
}

//Same as above

if (isLoggedIn) {
	//Show username
} else {
	//Show Login button
}

//Works with any expression that evaluates to "truthy" or "falsy"

if ("Jared") {
	//This would execute since "Jared" == true
}

if (0) {
	//This won't execute since 0 == false
}

********* Keep it DRY ***********

//Don't Repeat Yourself//
  -makes you more prone to errors
  -try not to copy/paste

var name1 = 'jared';

name1 = name1[0].toUpperCase() + name1.slice(1); //'Jared'

var name2 = 'john';

name2 = name2[0].toUpperCase() + name2.slice(1); //'John'

var name3 = 'sarah';

name3 = name2[0].toUpperCase() + name2.slice(1); //'John'???
         ^^^error


 *************Functions****************

 //Functions are a way to not have to repeat code
 //Two parts: function declaration & function invocation (calling a function)

 //value of a variable can be a function


 function capitalizeName() {
 	name1 = name1[0].toUpperCase() + name1.slice(1);
 }               ^evaluated first, then assigned to name


//Parameters go in between parentheses
 function capitalizeName(parameter) {

 }

//Returning a value:

function capitalizeName(name) {
	name = name[0].toUpperCase() + name.slice(1);
	return name;
}
     can also be

function capitalizeName(name) {
	return name[0].toUpperCase() + name.slice(1);
}

//Function invocation
 
function capitalizeName(name) {
	name = name[0].toUpperCase() + name.slice(1);
	return name;
}

capitalizeName('jared');

                ^arguments

 ****//Parameters are variables, arguments are values//****


 *Invoking a function is an expression, meaning it produces a value

 //Invocation is an expression

 function capitalizeName(name) {
	name = name[0].toUpperCase() + name.slice(1);
	return name;
}

var name1 = capitalizeName('jared');



***********PRACTICE**************

function addNums(num1, num2) {
  var add = num1 + num2;
  return add;
}

or

function addNums(num1, num2) {
	return num1 + num2;
}

var sum = addNums(3, 4);
console.log(sum);




**********SCOPE*************

//The only way to create a new scope in JS is with functions

//Functions create scope

var name = 'jared';

function capitalizeName() {
	name = 'Bob';         //name is visible because it's in a parent scope
}

var name1 = capitalizeName(); //name is 'Jared'

******Local Scope******

function doSomething() {
	var num1 = 10;    ///num1 is "local" to function
}

var num2 = num1;  //num2 is undefined

****Hide vars in Parent Scope*****

var fruit = 'apple';

function makePie() {
	var fruit = 'strawberry'; //Is a new variable local to makePie, hides outer variable
}

makePie();
(fruit == 'apple');       //true

-----------------------------------------------

var name = "jared";

function capitalizeName() {
	var name = 'Bob';         //name is declared (with var) inside the function, making it local

}

console.log(name); //will output "jared"



***********Functions inside of functions************

//Anywhere you can declare a variable, you can also declare a function


function outer() {
	var num1 = 5;

	function inner() {
		var num2 = 10;
		(num1 + num2);   //15, num1 is in parent scope and accessible
	}

	function inner2() {
		var num3 = 20;
		(num2 + num3);   //NaN - num2 is NOT in parent scope

	}

	(num1 + num2);  //NaN - num2 is local to inner and not accessible
}

(num1 + num2);  //NaN - num1 and num2 are not accessible




Parameters are local to Function 


function capitalizeName(name) {
    //var name is implied
}



*******BEWARE GLOBAL VARIABLES*********










****Returning functions from functions*****
//We can return any value from a function, including other functions
//You can create a function factory, kinda like "this function creates other functions and returns
// functions back to me"



function outer() {
    return 5;
}

outer;        // A variable. Value is a function
outer();      // An expression that invokes function outer
              // The value produced is 5;


function outer() {
    function inner() {
        return 10;
    }

    return inner;        // Doesn't invoke, just returns the variable inner
}

inner;                // undefined because declared inside function outer

outer;                // A variable. Value is a function
var x = outer();      // An expression that invokes function outer
                      // The value of x is just another function (inner)
x;                    // A variable.  Value is a function
x();                  // Because the value of x is a function, we
                      // can invoke it.
var y = x();          // The value produced is the return value of function inner
(y === 10);           // true





//Because the value of a variable is a function, you can invoke it like this: varname();




***************CLOSURES*****************

Closures are functions that have been returned from other functions.
What makes them magical: remember that functions can access variables that are in parent scopes,







function outer(name) {

    function inner() {
        return name;
    }

    return inner;

}

inner;                        // Not accessible

var inner = outer('Jared');   // Invokes outer, which returns the function inner
                              // We save the return value (the function) in
                              // A variable called inner (different scopes)

// inner is now a closure and remembers value passed to outer

var name1 = inner();            // name1 is 'Jared';
var name2 = inner();            // name2 is 'Jared';

// We can call outer again, and get another closure

var anotherInner = outer('Bob');

var name3 = anotherInner();     // name3 is 'Bob';
var name4 = inner();            // name4 is 'Jared';

// Each time we invoke outer, we get a new version of inner