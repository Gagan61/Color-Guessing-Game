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
var pickedColor = colors[3];
colorDisp.textContent =  pickedColor;
var clickedColor;

for( var i=0; i<squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
    //grab color of picked square
        clickedColor = this.style.backgroundColor;
        console.log(clickedColor);

    //compare clicked color with picked color
        if(clickedColor === pickedColor) alert("correct");
        else alert("wrong");
    });
}
