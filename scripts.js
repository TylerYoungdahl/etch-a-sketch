const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#newGridBtn");

let gridSize = 16;

function makeGrid(gridNum) {
  container.innerHTML = "";
  let squareSize = 960 / gridNum;

  for (let i = 0; i < gridNum * gridNum; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

newGridBtn.addEventListener("click", () => {
  let newGridSize = prompt("Enter new grid size: (1-100)");
  if (newGridSize !== "") {
    newGridSize = parseInt(newGridSize);
    if (newGridSize > 0 && newGridSize <= 100) {
      gridSize = newGridSize;
      makeGrid(gridSize);
    } else {
      alert("invalid number");
    }
  }
});

makeGrid(gridSize);
