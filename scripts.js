const container = document.querySelector("#container");

// let gridNum = 16;

function makeGrid(gridNum) {
  for (let i = 0; i < gridNum * gridNum; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    container.appendChild(square);
  }
}

makeGrid(16);

container.addEventListener();
