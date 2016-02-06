//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

  function isTyler(name) {
  	if (name === "Tyler") {
  		return true;
  	}
  	else {
  		return false;
  	}
  }

  isTyler(name);

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

  function getName() {
  	var name = prompt("What is your name?");
  	return name;
  }

  getName();


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

  function getName() {
  	var name = prompt("What is your name?");
  	return name;
  }

  function welcome() {
  	 var name = getName();
  	 alert("Welcome, " + name);
  	 }

  	 welcome();


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

  The terms are used somewhat interchangeably, but parameters are used inside the function declaration and arguments are
  are values passed when the function is called. Parameters are variables and arguments are values.

  Like so:

  function foo(parameters){

  }

  foo(arguments);


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  Falsy values in JavaScript:
  	false
  	null
  	undefined
  	0
  	NaN
  	'' (empty string)


  	You would check by typing ![value] in the console. If it returns "true", the value is falsy.



//Next Problem



//Create a function called myName that returns your name

  //Code Here

  function myName() {
  	return "Jessica";
  }
  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

  var newMyName = myName();

//Now alert the result of invoking newMyName
  alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
	function outerFn() {
		return (function() {
			return "Jessica";
		})();
	}
  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn;

//Now invoke innerFn.
innerFn();