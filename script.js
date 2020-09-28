let container = document.querySelector('.container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let cells = 0; cells < (rows * cols); cells++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "cell";
    };
  };
  
  makeGrid(16, 16);
