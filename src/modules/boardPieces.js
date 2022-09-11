import { tilesNodes } from './domElements';
import { gameFlow } from './gameFlow';
import { changeInfo } from './infoDisplay';
import { getRandomPawn } from './computerMoves';

export const pawn = (name, color, row, column) => {
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
      let forwardColumn = [];
      if (gameBoard.getPawn(forwardRow, getColumn(), getColor())
        === 'no') {
          forwardColumn.push(`${forwardRow.toString()}${pawnColumn}`)
        }
      return forwardColumn;
    }

    const calculateDiagonalMove = () => {
      let diagonalColumn = [];
      if (
        pawnColumn === 'a' || pawnColumn === 'c'
      ) {
        if (
        gameBoard.getPawn(forwardRow, 'b', getColor())
        !== 'no'
        && gameBoard.getPawn(forwardRow, 'b', getColor())[0]
        !== getColor()[0]) {
          diagonalColumn = ['b'];
        }
      } else if (pawnColumn === 'b') {
        let validColumn = ['a', 'c'];
        for (const col of validColumn) {
          if (
          gameBoard.getPawn(forwardRow, col, getColor())
          !== 'no'
          && gameBoard.getPawn(forwardRow, col, getColor())[0]
          !== getColor()[0]) {
            diagonalColumn.push(col);
          }
        }
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

export const pawns = (() => {
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

// depends on domElements, pawn, gameFlow
export const gameBoard = (() => {
  const tilesArr = Array
  .from(tilesNodes);

  const clearIndicator = () => {
    for (const tile of tilesArr) {
      tile.classList.remove('selected');
    }
  }

  const clearPossibleMoves = () => {
    for (const tiles of tilesArr) {
      tiles.classList.remove('possible-moves');
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

  const checkWin = () => {
    let colour = gameFlow.checkCurrentColour();
    let allPossibleMoves = [];
    
    for (let pawn in pawns.getList()) {
      let currPawn = pawns.getList()[pawn];

      /**
       * logic for checking if pawn
       * is on other side of the board
       */
      if (currPawn.getColor()[0] === colour[0]) {
        if (
        currPawn.getRow() === '3'
        && currPawn.getColor() === 'white'
        ) {
          gameFlow.changeGameState();
          return 1;
        } else if (
          currPawn.getRow() === '1'
          && currPawn.getColor() === 'black'
        ) {
          gameFlow.changeGameState();
          return 1;
        }

      /** logic for checking
       * if other color can move
       */
      } else if (currPawn.getColor()[0] !== colour[0]) {
          for (const i of currPawn.calculateLegalMoves()) {
            allPossibleMoves.push(i);
          }
      }
    }

    if (allPossibleMoves.length === 0) {
      gameFlow.changeGameState();
      return 1;
    }
  }

  const endOfTurnProcesses = () => {
    clearPawns();
    displayPawns();
    gameFlow.changeTargetPawn('');
    clearIndicator();
    clearPossibleMoves();
    if (checkWin()) {
      changeInfo(`${gameFlow.checkCurrentColour()} has won.`);
    } else {
      gameFlow.changeColour();
      changeInfo(`${gameFlow.checkCurrentColour()} to move.`);
    }
  }

  for (const tile of tilesArr) {
    tile.addEventListener('click', () => {
      gameFlow
      .changeTargetTile(
        tile.getAttribute('data-row'),
        tile.getAttribute('data-column'));
      
      clearIndicator();

      let previousPawn = pawns
        .getList()[gameFlow.getTargetPawn()];
      let clickedPawn = tile.querySelector('img');
      
      if (gameFlow.checkGameState() === true) {
        if (!!clickedPawn) {
          if (!!previousPawn) {
            clearPossibleMoves();
          }
          
          tile.classList.add('selected');
          let clickedPawnName = clickedPawn.getAttribute('data-name');
  
          let currentPawn = pawns
              .getList()
              [`${clickedPawnName}`];
          
          // display pawn possible moves
          if (currentPawn.getColor()
          === gameFlow.checkCurrentColour()) {
            for (const i of currentPawn.calculateLegalMoves()) {
              document
                .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
                .classList.add('possible-moves');
            }
          }
          
          // pawn eats enemy pawn
          if (gameFlow.getTargetPawn() !== ''
          &&
          previousPawn
            .calculateLegalMoves()
            .includes(
            gameFlow.getTargetTile()
            )
          && gameFlow.getTargetPawn()[0] !== clickedPawnName[0]
          && previousPawn.getColor() === gameFlow.checkCurrentColour()
          ) {
              pawns.removePawn(clickedPawnName);
              previousPawn
              .pawnMove(`${gameFlow.getTargetTile()[0]}`,
                        `${gameFlow.getTargetTile()[1]}`);
              endOfTurnProcesses();
          } else {
              gameFlow.changeTargetPawn(clickedPawn.getAttribute('data-name'));
          }
        }
  
        // pawn moves to empty tile
        else if (
          clickedPawn === null 
          && gameFlow.getTargetPawn() !== ''
          && previousPawn
              .calculateLegalMoves()
              .includes(
                gameFlow.getTargetTile() 
              )
          && previousPawn.getColor() === gameFlow.checkCurrentColour()
          ) {
          clearPossibleMoves();
          previousPawn
               .pawnMove(`${gameFlow.getTargetTile()[0]}`,
                      `${gameFlow.getTargetTile()[1]}`);
          endOfTurnProcesses();
         }
      }

      // for computer movements
      if (gameFlow.checkCurrentColour() === 'black' 
      && gameFlow.getTargetPawn()[0] !== 'b') {
        let computerMoveableTiles = [];
        let computerPawn;
      
        while(computerMoveableTiles.length === 0) {
          computerPawn = getRandomPawn().getAttribute('data-name');
          for (const i of pawns
            .getList()[computerPawn]
            .calculateLegalMoves()) {
              computerMoveableTiles.push(
              document
                .querySelector(
                  `[data-row='${i[0]}'][data-column='${i[1]}']`
                )
            )
          }
        }

        let computerPawnImg = document.querySelector(`[data-name='${computerPawn}']`);

        setTimeout(() => {
          computerPawnImg.click();
          computerMoveableTiles[0].click();
        }
        , 1000)

        console.log(computerMoveableTiles);
      }
    })
  }

  const getPawn = (row, column) => {
    let tile = document.querySelector(`[data-row='${row}'][data-column='${column}']`);
    return tile.querySelector('img') ?
    tile
      .querySelector('img')
      .getAttribute('data-name') : 'no';
  }
  
  return { displayPawns,
           tilesArr,
           clearPawns,
           getPawn }
})();