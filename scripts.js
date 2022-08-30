const domElements = (() => {
  const tilesNodes = document
            .querySelectorAll('div.tile');

  return { tilesNodes };
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

  // returns an array of tiles that 
  // pawn can legally move to
  const calculateLegalMoves = () => {
    let pawnRowInt = parseInt(pawnRow);
    let forwardRow = '';

    if (getColor() === 'black' & pawnRow !== '1') {
      forwardRow = pawnRowInt - 1;
    } else if (getColor() === 'white' & pawnRow !== '3') {
      forwardRow = pawnRowInt + 1;
    }

    const calculateForwardMove = () => {
      return [`${forwardRow.toString()}${pawnColumn}`];
    }

    const calculateDiagonalMove = () => {
      let diagonalColumn = [''];
      if (pawnColumn === 'a' || pawnColumn === 'c') {
        diagonalColumn = ['b'];
      } else if (pawnColumn ){
        diagonalColumn = ['a', 'c']
      }

      let moveableTile = [];
      for (let i of diagonalColumn) {
        moveableTile.push(`${forwardRow.toString()}${i}`);
      }
      return moveableTile;
    }
    
    return calculateForwardMove().concat(calculateDiagonalMove());
  }

  return { getName,
           getColor,
           getRow,
           getColumn,
           pawnImg,
           pawnMove,
           calculateLegalMoves };
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
    return `${targetRow}${targetColumn}`;
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

  return { getTargetTile,
           changeTargetTile,
           getTargetPawn,
           changeTargetPawn };
})();

const player = (name, color) => {
  const getName = () => {
    return name;
  }
  const getColor = () => {
    return color;
  }
  return { getName, getColor };
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
    let pawnList = pawns.getList();
    for (const pawn in pawns.getList()) {

      let pawnTilePosition = `[data-row="${pawnList[pawn]
        .getRow()}"][data-column="${pawnList[pawn].getColumn()}"]`;

      document
      .querySelector(pawnTilePosition)
      .appendChild(pawnList[pawn].pawnImg);
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
      // and if the clicked tile is in the list
      // of valid legal moves for the pawn,
      // then it moves the pawn to the clicked tile
      else if (clickedPawn === null &&
        gameFlow.getTargetPawn() !== ''
        &&
        pawns
          .getList()[gameFlow.getTargetPawn()]
          .calculateLegalMoves()
          .includes(
          gameFlow.getTargetTile() 
          )) {
        pawns.getList()[gameFlow.getTargetPawn()]
          .pawnMove(`${gameFlow.getTargetTile()[0]}`,
                    `${gameFlow.getTargetTile()[1]}`);
        gameBoard.displayPawns();
        gameFlow.changeTargetPawn('');
        console.log(gameFlow.getTargetPawn());
      }
    })
  }
  
  return { displayPawns, tilesArr }
})();

gameBoard.displayPawns();

