const gridSize= 16;
const squareSize = 200;

const etchContainer = document.querySelector("#EtchContainer")
//append to row container
//append rows to grid container

function drawGrid() {
    for (let i = 0; i < gridSize; i++) {
        const rowContainer = document.createElement('div');
        for (let j = 0; j < gridSize; j++) {
            rowContainer.classList.add('rowContainer');

            const square = document.createElement('div');
            square.classList.add('square');
            rowContainer.appendChild(square)
        }
        etchContainer.appendChild(rowContainer);
    }
}

function resetGrid() {
    squares.forEach(square => {
        square.style.backgroundColor = 'grey';
    })
}

drawGrid();

const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = document.querySelector("#colorPicker").value;
    })
})

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);