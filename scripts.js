const domElements = (() => {
  const tilesNodes = document
            .querySelectorAll('div.tile');

  return {tilesNodes};
})();

const pawn = (name, color, row, column) => {
  const pawnName = name;
  const pawnColor = color;
  let pawnRow = row;
  let pawnColumn = column;

  const getName = () => {
    return pawnName;
  }

  const getColor = () => {
    return pawnColor;
  }

  const getRow = () => {
    return pawnRow;
  }

  const getColumn = () => {
    return pawnColumn;
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

  const pawnMove = (newRow, newColumn) => {
    pawnRow = newRow;
    pawnColumn = newColumn;
  }

  return {getName, getColor,
          getRow, getColumn,
          pawnImg, pawnMove};
}

let bpawn1 = pawn('bpawn1', 'black', '3', 'a');
let wpawn1 = pawn('wpawn1', 'white', '1', 'a')
const pawnArr = {'bpawn1': bpawn1,
                 'wpawn1': wpawn1};

const gameFlow = (() => {
  let targetRow = '';
  let targetColumn = '';
  let targetPawn = '';

  const getTargetTile = () => {;
    return [targetRow, targetColumn];
  }
  
  const changeTargetTile = (row, column) => {
    targetRow = row;
    targetColumn = column;
  }

  const getTargetPawn = () => {
    return targetPawn;
  }

  const changeTargetPawn = (pawn) => {
    targetPawn = pawn;
  }

  return { getTargetTile, changeTargetTile,
           getTargetPawn, changeTargetPawn };
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

const gameBoard = (() => {
  const displayPawns = () => {
    // clearing all pawns from the tiles
    for (const tile of tilesArr) {
      while (tile.firstChid) {
        tile.removeChild(tile.lastChild);
      }
    }

    // putting pawns in their tiles
    for (const pawn in pawnArr) {
      document
      .querySelector(`[data-row="${pawnArr[pawn].getRow()}"][data-column="${pawnArr[pawn].getColumn()}"]`).appendChild(pawnArr[pawn].pawnImg);
    }}

  const tilesArr = Array
    .from(domElements.tilesNodes);
  
  for (const tile of tilesArr) {
    tile.addEventListener('click', () => {
      gameFlow
      .changeTargetTile(
        tile.getAttribute('data-row'),
        tile.getAttribute('data-column'));

      console.log(gameFlow.getTargetTile());

      // this checks if the tile has a pawnimg contained
      // within it
      let clickedPawn = tile.querySelector('img');
      if (!!clickedPawn) {
        gameFlow.changeTargetPawn(clickedPawn.getAttribute('data-name'));
        console.log(gameFlow.getTargetPawn());
      }
      // if clicked tile has no pawn in it, and
      // previously we clicked on a pawn,
      // then it moves the pawn to the clicked tile
      else if (clickedPawn === null &&
        gameFlow.getTargetPawn() !== ''){
        pawnArr[gameFlow.getTargetPawn()]
          .pawnMove(`${gameFlow.getTargetTile()[0]}`,
                    `${gameFlow.getTargetTile()[1]}`);
        gameBoard.displayPawns();
        gameFlow.changeTargetPawn('');
        console.log(gameFlow.getTargetPawn());
      }
    })
  }
  
  return {displayPawns, tilesArr}
})();

gameBoard.displayPawns();

