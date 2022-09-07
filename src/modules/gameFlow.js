export const gameFlow = (() => {
  let targetRow = '';
  let targetColumn = '';
  let targetPawn = '';
  let isGameRunning = true;

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

  const startGame = () => {
    isGameRunning = true;
  }

  const endGame = () => {
    isGameRunning = false;
  }

  /**
   * accepts pawns object
   * and checks for one of three
   * conditions for game to end
   * 1. white/black unable to move
   * 2. white/black pawns are all gone
   * (similar to 1.)
   * 3. white/black pawn has advanced
   * to the other end of the board
   */
  const checkWin = (pawns, colour) => {
    let win = false;
    for (let pawn in pawns) {
      /**
       * check the three conditions
       * if any is met
       * set win === true
       */
    }

    if (win === true) isGameRunning = false;
  }

  return { getTargetTile,
           changeTargetTile,
           getTargetPawn,
           changeTargetPawn,
           isGameRunning,
           startGame,
           endGame,
           checkWin };
})();