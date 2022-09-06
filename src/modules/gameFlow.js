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
           isGameRunning,
           startGame,
           endGame,
           checkWin };
})();