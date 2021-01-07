
var colors; //= randomColorArray(6);
var pickedColor; //= pickColor();
var squareDisplay = 6;


// // changing square  colors
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");

// // change the RGB Value to heading
// document.querySelector("#RGBtoGuess").textContent = pickedColor;

// // Assign color to each square
// assignColors()

// reset the whole game
var reset = document.querySelector("#reset");
resetGame(squareDisplay);

reset.addEventListener("click",function(){
    resetGame(squareDisplay)
});




// Easy or Hard

document.querySelector("#easy").addEventListener("click",function(){
    document.querySelector("#easy").classList.add("select");
    document.querySelector("#hard").classList.remove("select");
    squareDisplay = 3;
    resetGame(squareDisplay);
    
});

document.querySelector("#hard").addEventListener("click",function(){
    document.querySelector("#hard").classList.add("select");
    document.querySelector("#easy").classList.remove("select");
    squareDisplay = 6;
    resetGame(squareDisplay);
});











// my Functions
function randomColorArray(numb) {
    var colors=[];
    colors.length = numb;
    for (var i=0;i<colors.length;i++) {
        colors[i] = "rgb("+Math.floor(Math.random()*255+1)+", "+Math.floor(Math.random()*255+1)+", "+Math.floor(Math.random()*255+1)+")";
    }
    return colors;
}

function pickColor() {
    var colorIdx = Math.floor(Math.random()*colors.length+1);
    return colors[colorIdx];
}

function unifyColor(color,array) {
    for (var i=0;i<array.length;i++) {
        array[i].style.backgroundColor = color;
    }
}

function resetGame(squareDisplay){
    document.querySelector("#message").textContent="";
    colors = randomColorArray(squareDisplay);
    pickedColor = pickColor();
    document.querySelector("#RGBtoGuess").textContent = pickedColor;
    reset.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    assignColors();

}

function assignColors() {

    for (var i=0;i<squares.length;i++) {
        if (squareDisplay === 3) {
            if (colors[i]) {
                squares[i].style.backgroundColor=colors[i];
            } else {
                squares[i].style.display = "none";
            }

        } else {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor=colors[i];

            
        }

    
    // when click each square:
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            document.querySelector("#message").textContent="Correct!";
            unifyColor(pickedColor,squares);
            reset.textContent = "Play Again?";
            h1.style.backgroundColor = pickedColor;

        } else {
            this.style.backgroundColor = "#232323";
            document.querySelector("#message").textContent="Try Again!";
        }
    })
    }

}