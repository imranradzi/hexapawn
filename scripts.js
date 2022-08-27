const domElements = (() => {
  const tilesNodes = document
            .querySelectorAll('div.tile');

  return {tilesNodes};
})();

const gameFlow = (() => {
  let targetRow = '';
  let targetColumn = '';
  let targetPawn = '';

  const displayTargetTile = () => {
    console.log(targetRow, targetColumn);
  }
  
  const changeTargetTile = (row, column) => {
    targetRow = row;
    targetColumn = column;
  }

  const displayTargetPawn = () => {
    console.log(targetPawn);
  }

  const changeTargetPawn = (pawn) => {
    targetPawn = pawn;
  }

  return { displayTargetTile, changeTargetTile,
           displayTargetPawn, changeTargetPawn };
})();

const player = (name, color) => {
  const getName = () => {
    return name;
  }
  const getColor = () => {
    return color;
  }
  return {getName, getColor};
};

const pawn = (name, color, row, column) => {
  const getName = () => {
    return name;
  }
  const pawnImg = document.createElement('img');

  if (color === 'black') {
    pawnImg.setAttribute('src', 'svg/bpawn.svg');
  } else if (color === 'white') {
    pawnImg.setAttribute('src', 'svg/pawn.svg');
  }
  pawnImg.setAttribute('height', '50');
  pawnImg.setAttribute('width', '50');
  pawnImg.setAttribute('data-name', name);

  const getColor = () => {
    return color;
  }

  const pawnMove = (newRow, newColumn) => {
    row = newRow;
    column = newColumn; 
  }

  return {getName, getColor, row, column, pawnImg};
};

let bpawn1 = pawn('bpawn1', 'black', '3', 'a');
let wpawn1 = pawn('wpawn1', 'white', '1', 'a')
const pawnArr = [bpawn1, wpawn1];

const gameBoard = (() => {
  const displayPawns = () => {
    for (const pawn of pawnArr) {
      document
      .querySelector(`[data-row="${pawn.row}"][data-column="${pawn.column}"]`).appendChild(pawn.pawnImg);
    }}

  const tilesArr = Array
    .from(domElements.tilesNodes);
  
  for (const tile of tilesArr) {
    tile.addEventListener('click', () => {
    gameFlow
    .changeTargetTile(
      tile.getAttribute('data-row'),
      tile.getAttribute('data-column'));

    gameFlow.displayTargetTile();

    // this checks if the tile has a pawnimg contained
    // within it
    let clickedPawn = tile.querySelector('img');
    if (!!clickedPawn) {
      gameFlow.changeTargetPawn(clickedPawn.getAttribute('data-name'));
    }

    gameFlow.displayTargetPawn();
    })
  }
  
  return {displayPawns, tilesArr}
})();

gameBoard.displayPawns();

