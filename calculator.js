var calculator = document.getElementById('calculator');

calculator.addEventListener("click", handleEvents);

 function handleEvents (event) {
  var term1 = document.getElementById('term1').value;
  var term2 = document.getElementById('term2').value;

	  if (event.target.name === "addition") {
	    add(term1, term2);
	  }

	  else if (event.target.name === "subtraction") {
	  	 subtract(term1, term2);
	  }

	  else if (event.target.name === "multiplication") {
	  	 multiply(term1, term2);
	  }

	  else if (event.target.name === "division") {
	  	 divide(term1, term2);
	  }

	  // else if (event.target.name === "equals") {
	  // 	equals();
	  // }
}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


function equals(result) {
	var output = document.getElementById('output')
	output.innerHTML = `= ${result}`;
}

function multiply(term1, term2) {
 	
	if (term2) {


		var result = parseFloat(term1) * parseFloat(term2);
	}
return result;
	
}



/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.

 */

function add (term1, term2) {
	if (term2) {
		var result = parseFloat(term1) + parseFloat(term2);
	}


	output.innerHTML = result;
	return result;
	
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtract(term1, term2) {
 	if (term2) {
		var result = parseFloat(term1) - parseFloat(term2);
	}
	output.innerHTML = result;
	return result;
	
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(term1, term2) {
 	
	if (term2) {


		var result = parseFloat(term1) / parseFloat(term2);
	}
    output.innerHTML = result;
	return result;


}
  // Create a function that accepts three arguments.
  //   1. First number
  //   2. Second number
  //   3. A function that performs an operation on them

  // Return the value of the operation.
 

function operand(term1, term2, funk) {
funk(term1, term2);


}



