var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var colorDisp = document.getElementById("colorDisp");
var pickedColor = pickColor();
colorDisp.textContent =  pickedColor;
var clickedColor;
var messageDisp = document.getElementById("message");

for( var i=0; i<squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
    //grab color of picked square
        clickedColor = this.style.backgroundColor;
        console.log(clickedColor);

    //compare clicked color with picked color
        if(clickedColor === pickedColor){
            messageDisp.textContent = "Correct"
            changeColor(clickedColor);
        } 
        else {
            //alert("wrong");
            // change clicked color to body color
            this.style.backgroundColor = "#232323";
            messageDisp.textContent = "Try Again";
        }
    });
}

function changeColor (color){
    // change color of all squares
    //loop through all squares
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
 
function pickColor (){
    var random = Math.floor(Math.random()* colors.length);
    return (colors[random]);
}
