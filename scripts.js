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

  const calculateLegalMoves = () => {
    // to fill in later
  }

  return {getName, getColor,
          getRow, getColumn,
          pawnImg, pawnMove};
}

const pawns = (() => {
  const abc = ['a', 'b', 'c'];
  const list = {};
  for (let i = 1; i < 4; i++) {
    list[`bpawn${i}`] = pawn(`bpawn${i}`, 'black',
    '3', abc[i - 1]);
    list[`wpawn${i}`] = pawn(`wpawn${i}`, 'white',
    '1', abc[i - 1]);
  }

  const getList = () => {
    return list;
  }

  return { getList }
})();


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
    for (const pawn in pawns.getList()) {
      document
      .querySelector(`[data-row="${pawns.getList()[pawn].getRow()}"][data-column="${pawns.getList()[pawn].getColumn()}"]`).appendChild(pawns.getList()[pawn].pawnImg);
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
        pawns.getList()[gameFlow.getTargetPawn()]
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

