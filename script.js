let container = document.querySelector(".container");

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let cells = 0; cells < rows * cols; cells++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "cell";

  }
}

//draw empty grid on default size 16 x 16
makeGrid(16, 16);
draw();

function draw(){
  const elements = document.querySelectorAll('.cell');
    elements.forEach(function(element){
      element.addEventListener('mouseover', function(event){
        event.target.style.background = randomColor();
      })
    } )
}
//return random hex code color
function randomColor()
{
    let randomCode = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomCode;
}
//reset white color to colored cells and takes the prompt value to draw a new grid
function resizeGrid(){
  container.innerHTML = "";
  const elements = document.querySelectorAll(".cell")
    elements.forEach(element => element.style.background = "white");
    let size = prompt("Please enter how many columns and rows you want")
    makeGrid(size, size);
    draw();
}
