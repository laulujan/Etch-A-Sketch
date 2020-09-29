let container = document.querySelector(".container");

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let cells = 0; cells < rows * cols; cells++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "cell";
    const elements = document.querySelectorAll('.cell');
    elements.forEach(function(element){
      element.addEventListener('mouseover', function(event){
        event.target.style.background = randomColor();
      })
    } )

  }
}

makeGrid(16, 16);

function randomColor()
{
    let randomCode = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomCode;
}