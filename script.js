let container = document.querySelector(".container");

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let cells = 0; cells < rows * cols; cells++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "cell";
    let elements = document.querySelectorAll('.cell');
    elements.forEach(function(element){
      element.addEventListener('mouseover', function(event){
        event.target.classList.add('draw')
      })
    } )

  }
}

makeGrid(16, 16);
