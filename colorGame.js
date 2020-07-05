var numSquare = 6;
var colors = generateRandomColor(numSquare);

var squares = document.querySelectorAll(".square");
var colorDisp = document.getElementById("colorDisp");
var pickedColor = pickColor();

var clickedColor;
var messageDisp = document.getElementById("message");
var h1 = document.querySelector("h1") ;
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisp.textContent =  pickedColor; //change the color in header

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare = 3;
    colors = generateRandomColor(numSquare);
    pickedColor  = pickColor();
    colorDisp.textContent =  pickedColor; 
    //remove bottom three and change upper three
    for( var i=0; i<squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    } 
});
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquare = 6;
    colors = generateRandomColor(numSquare);
    pickedColor  = pickColor();
    colorDisp.textContent =  pickedColor; 
    //remove bottom three and change upper three
    for( var i=0; i<squares.length ; i++){
        {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } 
    } 
})

resetButton.addEventListener("click", function(){
    //generate all colors
    colors = generateRandomColor(numSquare);
    //pick color
    pickedColor = pickColor(); 
    //change color in header
    colorDisp.textContent =  pickedColor; 
    //change color of squares
    for( var i=0; i<squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
    }    
    h1.style.background = "#232323";

});

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
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again ?"
        } 
        else {
            //alert("wrong");
            // change clicked color to body color
            this.style.backgroundColor = "#232323";
            messageDisp.textContent = "Try Again";
        }
    });
}

function changeColor(color){
    // change color of all squares
    //loop through all squares
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
 
function pickColor (){
    var random = Math.floor(Math.random() * colors.length);
    return (colors[random]);
}

function generateRandomColor (num){
    var arr = [];
    for  (var i=0; i<num; i++){
        arr[i]= randomColor();
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
