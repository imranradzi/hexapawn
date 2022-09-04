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

  /**
   * returns an array of tiles that 
   * pawn can legally move to
   */ 
  const calculateLegalMoves = () => {
    let pawnRowInt = parseInt(pawnRow);
    let forwardRow = '';

    if (
      getColor() === 'black' && pawnRow === '1'
      || getColor() === 'white' && pawnRow === '3') {
      return [];
    }

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
      } else if (pawnColumn ) {
        diagonalColumn = ['a', 'c']
      }

      let moveableTile = [];
      for (let i of diagonalColumn) {
        moveableTile.push(`${forwardRow.toString()}${i}`);
      }
      return moveableTile;
    }
    
    return calculateForwardMove()
            .concat(calculateDiagonalMove());
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

  const removePawn = (pawnName) => {
    delete list[pawnName];
  }

  return { getList, removePawn }
})();


const gameFlow = (() => {
  let targetRow = '';
  let targetColumn = '';
  let targetPawn = '';
  let isGameRunning = false;

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

  /**
   * TODO: add turn based functionality
   *       i.e., let white move first,
   *       then black, etc.
   */ 

  const gameLoop = () => {
    while (isGameRunning === true) {
      /**
       * execute turn based gameplay
       * if game is running
       */
    }
  }

  const startGame = () => {
    /**
     * sets isgamerunning to true
     * starts gameloop
     */
    isGameRunning = true;
  }

  const endGame = () => {
    /**
     * terminates
     * loop above
     */
    isGameRunning = false;
  }

  const checkWin = () => {
    /**
     * at the start (or maybe end)
     * of every loop,
     * check for winning (or losing)
     * conditions
     */
  }

  return { getTargetTile,
           changeTargetTile,
           getTargetPawn,
           changeTargetPawn,
           startGame,
           endGame,
           checkWin };
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
  const tilesArr = Array
  .from(domElements.tilesNodes);

  const clearIndicator = () => {
    for (const tile of tilesArr) {
      tile.classList.remove('selected');
    }
  }

  const clearPawns = () => {
    for (const tile of tilesArr) {
      while (tile.firstChild) {
        tile.removeChild(tile.lastChild);
      }
    }
  }

  const displayPawns = () => {
    let pawnList = pawns.getList();
    for (const pawn in pawns.getList()) {

      let pawnTilePosition = `[data-row='${pawnList[pawn]
        .getRow()}'][data-column='${pawnList[pawn]
        .getColumn()}']`;

      document
      .querySelector(pawnTilePosition)
      .appendChild(pawnList[pawn].pawnImg);
    }
  }

  for (const tile of tilesArr) {
    tile.addEventListener('click', () => {
      gameFlow
      .changeTargetTile(
        tile.getAttribute('data-row'),
        tile.getAttribute('data-column'));
      
      clearIndicator();
      // console.log(gameFlow.getTargetTile());

      let previousPawn = pawns
        .getList()[gameFlow.getTargetPawn()];

      // this checks if the tile has a pawnimg contained
      // within it
      let clickedPawn = tile.querySelector('img');
      
      if (!!clickedPawn) {

        // removes highlighted previous possible tiles
        // note code duplication
        if (!!previousPawn) {
          for (const i of previousPawn.calculateLegalMoves()) {
            document
              .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
              .classList.remove('possible-moves');
          }
        }
        
        tile.classList.add('selected');
        let clickedPawnName = clickedPawn.getAttribute('data-name');

        let currentPawn = pawns
            .getList()
            [`${clickedPawnName}`];
        
        console.log(currentPawn
          .calculateLegalMoves());

        /**
         * TODO: make sure actual possible tiles are highlighted,
         * and remove highlighted tiles of previous pawn,
         * also code duplication
         */
        console.log(currentPawn.calculateLegalMoves());
        for (const i of currentPawn.calculateLegalMoves()) {
          document
            .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
            .classList.add('possible-moves');
        }

        // console.log(previousPawn);

        /**
         * if we clicked on a pawn,
         * and we also previously clicked on a pawn,
         * and the selected tile is a valid tile 
         * for the previously clicked pawn,
         * and the two pawns are opposite colours,
         * then the previously clicked pawn
         * deletes the clicked pawn from existence
         */
        if (gameFlow.getTargetPawn() !== ''
        &&
        previousPawn
          .calculateLegalMoves()
          .slice(1,3)
          .includes(
          gameFlow.getTargetTile() 
          )
          
        /**
         * checks if the first letter of the two pawns are 
         * the same or not 
         */
        && gameFlow.getTargetPawn()[0] !== clickedPawnName[0]
        ) {
            pawns.removePawn(clickedPawnName);
            previousPawn
            .pawnMove(`${gameFlow.getTargetTile()[0]}`,
                      `${gameFlow.getTargetTile()[1]}`);
            gameBoard.clearPawns();
            gameBoard.displayPawns();
            gameFlow.changeTargetPawn('');
            clearIndicator();
            // code duplication
            for (const i of currentPawn.calculateLegalMoves()) {
              document
                .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
                .classList.remove('possible-moves');
            }
        } else {
            gameFlow.changeTargetPawn(clickedPawn.getAttribute('data-name'));
        }
      }

      /**
       * if clicked tile has no pawn in it, and
       * previously we clicked on a pawn,
       * and if the clicked tile is in the list
       * of valid legal moves for the pawn,
       * then it moves the pawn to the clicked tile
       */
      else if (
        clickedPawn === null 
        && gameFlow.getTargetPawn() !== ''
        && [previousPawn
            .calculateLegalMoves()[0]]
            .includes(
              gameFlow.getTargetTile() 
            )
        ) {
        for (const i of previousPawn.calculateLegalMoves()) {
            document
              .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
              .classList.remove('possible-moves');
        }

        // code duplication
        previousPawn
             .pawnMove(`${gameFlow.getTargetTile()[0]}`,
                    `${gameFlow.getTargetTile()[1]}`);
        gameBoard.clearPawns();
        gameBoard.displayPawns();
        gameFlow.changeTargetPawn('');
        clearIndicator();
        console.log(gameFlow.getTargetPawn());
       }
    })
  }
  
  return { displayPawns,
           tilesArr,
           clearPawns }
})();

gameBoard.displayPawns();

