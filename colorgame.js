//alert("Connected!")
/* var colors= [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
] */
var numSquares=6;
var colors= generateRandomColors(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();   //colors[3];
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton= document.querySelector("#reset");

/* var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn"); 
 
easyBtn.addEventListener("click",function(){
    //alert("Easy Button Selected");
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors= generateRandomColors(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent= pickedColor;
    for (var i=0; i<squares.length; i++){
        if (colors[i]){ //random colors on 3 squares
            squares[i].style.backgroundColor= colors[i];
        }
        else{   //hiding last 3 squares
            squares[i].style.display= "none";
        }
    }
});
hardBtn.addEventListener("click", function(){
    //alert("Hard Button Selected");
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors= generateRandomColors(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent= pickedColor;
    for (var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor= colors[i];
            squares[i].style.display= "block";
    }
});
 */

var modeButtons= document.querySelectorAll(".mode")
for (var i=0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        this.classList.add("selected");
        //this.textContent === "Easy" ? numSquares=3: numSquares=6;
        if (this.textContent === "Easy"){
            numSquares= 3;
        }
        else if (this.textContent === "Hard"){
            numSquares= 9;
        }
        else{
            numSquares= 6;
        }
        reset();
    });
}
function reset(){
    //regenerate all the new colors
    colors= generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor= pickColor();
    //change the colordisplay to match pickedcolor
    colorDisplay.textContent= pickedColor;
    //change the colors of the squares on the page
    for (var i=0; i<squares.length; i++){
        if (colors[i]){
            squares[i].style.display= "block";
            squares[i].style.backgroundColor= colors[i];
        }
        else{
            squares[i].style.display= "none";
        }
    }
    h1.style.backgroundColor= "steelblue";
    messageDisplay.textContent= "";
    resetButton.textContent="New Colors";
}

resetButton.addEventListener("click", function(){
    /* 
    //alert("CLicked reset Button");
    //regenerate all the new colors
    colors= generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor= pickColor();
    //change the colordisplay to match pickedcolor
    colorDisplay.textContent= pickedColor;
    //change the colors of the squares on the page
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor= colors[i];
    }
    h1.style.backgroundColor= "steelblue";
    messageDisplay.textContent= "";
    this.textContent="New Colors";
 */
    reset();
});
colorDisplay.textContent= pickedColor;
for (var i=0; i<squares.length; i++){
    // addd initial colors to squares
    if (colors[i]){
        squares[i].style.display= "block";
        squares[i].style.backgroundColor= colors[i];
    }
    else{
        squares[i].style.display= "none";
    }
    //squares[i].style.backgroundColor= colors[i];
    // add quick listeners to the squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor= this.style.backgroundColor;
        // compare color to picked color
        if (clickedColor=== pickedColor){
            //alert("Correct!!");
            messageDisplay.textContent= "Correct !";
            messageDisplay.style.color= "green";
            changeColors(clickedColor);
            h1.style.backgroundColor= clickedColor;
            resetButton.textContent= "Play Again ?";
        }
        else{
            //alert("Wrong!!!");
            this.style.backgroundColor= "#242424";
            messageDisplay.textContent= "Try Again";
            messageDisplay.style.color= "red";

        }
    });
}

function changeColors(color){
    //loop through all sqaures
    for (var i=0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor= color;
    }
}
function pickColor(){
    var random= Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr= [];
    //repeat num times
    for (var i=0; i< num; i++){
        // get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}
function randomColor(){
    // pick a 'red' from 0 to 255
    var r= Math.floor(Math.random()*256);
    // pick a 'green' from 0 to 255
    var g= Math.floor(Math.random()*256);
    // pick a 'blue' from 0 to 255
    var b= Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
