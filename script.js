var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".s1");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      reset.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again !!!";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to arr
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

reset.addEventListener("click", function () {
  //generate new color
  colors = generateRandomColors(numSquares);
  //pick a new random color
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change color of square
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  reset.textContent = "New Colors";
});

easybtn.addEventListener("click", function () {
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
});

hardbtn.addEventListener("click", function () {
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
});
