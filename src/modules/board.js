import { resetButton, tilesNodes } from './domElements';
import { pawns } from './pawns';
import { gameFlow } from './gameFlow';
import { changeInfo, changeScore } from './display';
import { basicComputerMove } from './computerMoves';

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
    const pawnList = pawns.getList();
    for (const pawn in pawns.getList()) {

      const pawnTilePosition = `[data-row='${pawnList[pawn]
        .getRow()}'][data-column='${pawnList[pawn]
        .getColumn()}']`;

      document
      .querySelector(pawnTilePosition)
      .appendChild(pawnList[pawn].pawnImg);
    }
  }

  const checkWin = () => {
    const colour = gameFlow.checkCurrentColour();
    const allPossibleMoves = [];
    
    for (const pawn in pawns.getList()) {
      const currPawn = pawns.getList()[pawn];

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
      changeInfo(`${gameFlow.checkCurrentColour()} has won!`);
      gameFlow.updateScore(gameFlow.checkCurrentColour());
      changeScore(gameFlow.checkCurrentColour());
    } else {
      gameFlow.changeColour();
      changeInfo(`${gameFlow.checkCurrentColour()} to move`);
    }
  }

  for (const tile of tilesArr) {
    tile.addEventListener('click', () => {
      gameFlow
      .changeTargetTile(
        tile.getAttribute('data-row'),
        tile.getAttribute('data-column'));
      
      clearIndicator();

      const previousPawn = pawns
        .getList()[gameFlow.getTargetPawn()];
      const clickedPawn = tile.querySelector('img');
      
      if (gameFlow.checkGameState()) {
        if (clickedPawn) {
          if (previousPawn) {
            clearPossibleMoves();
          }
          
          tile.classList.add('selected');
          const clickedPawnName = clickedPawn.getAttribute('data-name');
  
          const currentPawn = pawns
              .getList()[`${clickedPawnName}`];
          
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
      && gameFlow.getTargetPawn()[0] !== 'b'
      && gameFlow.checkGameState()) {
        basicComputerMove();
      }
    })
  }

  const boardReset = () => {
    gameFlow.resetFlow();
    pawns.resetPawns();
    clearPawns();
    displayPawns();
    changeInfo(`${gameFlow.checkCurrentColour()} to move`);
    [...document.querySelectorAll('.tile > img')]
  .forEach((el) => {
    el.classList.add('animation');
    setTimeout(() => {
      el.classList.remove('animation');
    }, 1000);
  })
  }

  resetButton.addEventListener('click', boardReset);
  
  return { displayPawns,
           tilesArr,
           clearPawns,
           boardReset }
})();