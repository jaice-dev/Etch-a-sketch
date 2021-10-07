const gridSize= 16;
const squareSize = 200;

const etchContainer = document.querySelector("#EtchContainer")
const rowContainer = document.createElement('div');
rowContainer.classList.add('rowContainer');

for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    rowContainer.appendChild(square)
}
etchContainer.appendChild(rowContainer)
//append to row container
//append rows to grid container