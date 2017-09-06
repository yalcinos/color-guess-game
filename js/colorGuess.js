
var colors=randomColors(6);
var squares=document.querySelectorAll(".square");
var colorpicked=pickColorAction();
var colorDisplay=document.getElementById("colorrgb");
var resultDisplay=document.getElementById("resultMessage");

colorDisplay.textContent=colorpicked;
for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		
		if(clickedColor===colorpicked){
			resultDisplay.textContent="Correct!";
			changeColorOfSquares();
		}
		else
		{
			this.style.backgroundColor="#232323";
			resultDisplay.textContent="False!"; 
		}
	});
}

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