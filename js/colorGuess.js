
var colorlength=6;
var colors=randomColors(colorlength);
var squares=document.querySelectorAll(".square");
var colorpicked=pickColorAction();
var colorDisplay=document.getElementById("colorrgb");
var resultDisplay=document.getElementById("resultMessage");
var resetButton=document.getElementById("resetButton");
var h1=document.querySelector("h1");
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");
var header=document.querySelector(".header");
var heart=document.getElementById("heartcount");
var score=document.getElementById("highscore");

colorDisplay.textContent=colorpicked+"=?";

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;

		if(clickedColor===colorpicked){
			resultDisplay.textContent="Correct!";
			changeColorOfSquares();
			resetButton.textContent="Play Again ?";
			header.style.backgroundColor=colorpicked;
		}
		else
		{
			this.style.backgroundColor="#232323";
			resultDisplay.textContent="Try Again!"; 
		}
	});
}

easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected-button");
	easyButton.classList.add("selected-button");
	colorlength=3;
	colors=randomColors(colorlength);
	//select random color in "colors" array.
	colorpicked=pickColorAction();
	colorDisplay.textContent=colorpicked+"=?";

	for(var i=0; i<squares.length; i++){
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		} else{
			squares[i].style.display="none";
		}	
	}
	header.style.backgroundColor="#6edfb5";
	resultDisplay.textContent="";
});

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected-button");
	hardButton.classList.add("selected-button");
	colorlength=6;
	colors=randomColors(colorlength);
	//select random color in "colors" array.
	colorpicked=pickColorAction();
	colorDisplay.textContent=colorpicked+"=?";

	for(var i=0; i<squares.length; i++){
		
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}

	header.style.backgroundColor="#6edfb5";
	resultDisplay.textContent="";

});

resetButton.addEventListener("click",function(){
	if(resetButton.textContent="Play Again ?")
	{
		colors=randomColors();
	}
	//generate new colors
	colors=randomColors(colorlength);
	//pick a new random color
	colorpicked=pickColorAction();
	//change colorDisplay to match picked Color.
	colorDisplay.textContent=colorpicked+"=?";
	//change content of squares.
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	
	header.style.backgroundColor="#6edfb5";
	resultDisplay.textContent="";
	resetButton.textContent="New Color";
});


function changeColorOfSquares() {
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colorpicked;
	}
}
function pickColorAction(){
	var randomnumber=Math.floor(Math.random()*colors.length);
	return colors[randomnumber];
}
function generateColor(){
	var r=Math.floor(Math.random()*255+1);
	var g=Math.floor(Math.random()*255+1);
	var b=Math.floor(Math.random()*255+1);
	return "rgb("+r+", "+g+", "+b+")";
}
function randomColors(number)
{
	var colorArray=[];
	for(var i=0; i<number;i++){
		colorArray.push(generateColor());	
	}
	return colorArray;
}

