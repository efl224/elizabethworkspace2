
//use the "var" keyword to create a new variable
//in this case the variable is an empty object {} called fibber
var fibber = {};



//the first property of fibber will be called initialize and it will be a function
//functions are groups of code contained by the {}
//we call the function later on using fibber.initialize()
//here we define the function, and what it will do
fibber.initialize = function(){

	fibber.currentStatement = {};
	fibber.currentStatement.statementText = "Penguins can't fly";
	fibber.currentStatement.statementContext = "Climate change conference in March 2013"
	fibber.currentStatement.statementIsTrue = true

	 fibber.currentStatement.ifWrong = "duh! penguins can't fly!";
	 fibber.currentStatement.ifRight = "yes!!!";

	//first we want to make it so the initial "start" button in the instructions panel does more than just go to the "#viewstatement" panel, we also want it to load the intial statement.
	//to make it so the start button does something we first use jQuery to find the button, and then provide it a function to execute when the button is clicked on
	$("#startbtn").click(function(){
		fibber.viewStatement();	//here we call another function to run when button is clicked
	});


	//now we should enable the truth/fib buttons
	//the truth buttons all share a "truth-btn" class
	//the fib buttons all share a "fib-btn" class
	//so we will attach logic to the class itself
	$(".truth-btn").click(function(){
		fibber.processDecision("truth");	//we're calling the processDecision function and sending a value as a parameter so the function knows what the player's decision was.
	});
	$(".fib-btn").click(function(){
		fibber.processDecision("fib");
	});

};




//this function is called when the "#startbtn" in the instructions panel is clicked on
//this will load a statement into the "#viewstatement" panel
fibber.viewStatement = function(){

	//first let's create some content we want to display



	//now let's display the variables we defined above on the #viewstatement panel
	//using jQuery we can find all the corresponding divs to display the variables
	$("#statement-text").text(fibber.currentStatement.statementText);
	$("#statement-context").text(fibber.currentStatement.statementContext);

};



//this function is called whenever the "truth" or "fib" button is clicked on
//the functionality of the button is set in fibber.initialize()
//in this function we take in a parameter "decision" (e.g., function(decision))
//the decision variable is either "truth" or "fib" based on which button was clicked on
//in the logic we check the value of the decision variable and display a corresponding alert
fibber.processDecision = function(decision){

	//this is where we implement "conditional logic"
	//we know whether the question is true or not, so we can provide feedback here
	if(decision == "truth"){
		
		alert("Penguins cannot fly. It is a fact. They have a wing structure, but those wings cannot lift them in the air as is the case with other birds.");
	}
	if(decision == "fib"){
		alert("Bravo. You know that penguins cannot fly. However they can 'fly' underwater, using their wing structure to reach speeds of up to 15-25 mph.");
	}

};



