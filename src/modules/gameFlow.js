import { pawn, pawns } from './boardPieces';

export const gameFlow = (() => {
  let targetRow = '';
  let targetColumn = '';
  let targetPawn = '';
  let isGameRunning = true;
  let currentColour = 'white';

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

  const checkGameState = () => {
    return isGameRunning;
  }

  const changeGameState = () => {
    if (isGameRunning === true) {
      isGameRunning = false;
    } else if (isGameRunning === false) {
      isGameRunning = true;
    }
  }

  /**
   * TODO: add turn based functionality
   *       i.e., let white move first,
   *       then black, etc.
   */ 

  const startGame = () => {
    isGameRunning = true;
  }

  const endGame = () => {
    isGameRunning = false;
  }

  const checkCurrentColour = () => {
    return currentColour;
  }

  const changeColour = () => {
    if (currentColour === 'white') {
      currentColour = 'black';
    } else if (currentColour === 'black') {
      currentColour = 'white';
    }
  }

  return { getTargetTile,
           changeTargetTile,
           getTargetPawn,
           changeTargetPawn,
           checkGameState,
           startGame,
           endGame,
           changeGameState,
           checkCurrentColour,
           changeColour };
})();