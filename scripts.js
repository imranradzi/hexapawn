const domElements = (() => {
  const tilesArr = Array
  .from(document
    .querySelectorAll('div.tile'));

  for (const tile of tilesArr) {
    tile.addEventListener('click', () => {
    gameFlow
    .changeTargetTile(
      tile.getAttribute('data-row'),
      tile.getAttribute('data-column'));
    gameFlow.displayTargetTile();
    })
  }

  return {tilesArr};
})();

const gameFlow = (() => {
  let targetRow = '';
  let targetColumn = '';

  const displayTargetTile = () => {
    console.log(targetRow, targetColumn);
  }
  
  const changeTargetTile = (row, column) => {
    targetRow = row;
    targetColumn = column;
  }

  return { displayTargetTile, changeTargetTile };
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

const pawn = (color, row, column) => {
  const pawnImg = document.createElement('img');

  if (color === 'black') {
    pawnImg.setAttribute('src', 'svg/bpawn.svg');
  } else if (color === 'white') {
    pawnImg.setAttribute('src', 'svg/pawn.svg');
  }
  pawnImg.setAttribute('height', '50');
  pawnImg.setAttribute('width', '50');

  const getColor = () => {
    return color;
  }

  const pawnMove = (newRow, newColumn) => {
    row = newRow;
    column = newColumn; 
  }

  return {getColor, row, column, pawnImg};
};

let bpawn1 = pawn('black', '3', 'a');
let wpawn1 = pawn('white', '1', 'a')
const pawnArr = [bpawn1, wpawn1];

const gameBoard = (() => {
  const displayPawns = () => {
    for (const pawn of pawnArr) {
      document
      .querySelector(`[data-row="${pawn.row}"][data-column="${pawn.column}"]`).appendChild(pawn.pawnImg);
    }}
  
    return { displayPawns }
})();

gameBoard.displayPawns();

