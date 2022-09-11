import { pawns } from './pawns';

let compColor = 'b';

const filterColoredPawns = (pawn) => {
  if (pawn.getAttribute('data-name')[0] === compColor) return true;
}

export const getMoveablePawns = () => {
  return [...document.querySelectorAll('.tile > img')].filter(filterColoredPawns);
}

export const getRandomIndex = () => {
  return index = Math.floor(Math.random() * getMoveablePawns.length);
}

export const basicComputerMove = () => {
  let computerMoveableTiles;
  let computerPawn;

  let index = Math.floor(Math.random() * getMoveablePawns().length);
  while (true) {
    computerMoveableTiles = [];
    computerPawn = getMoveablePawns()[index]
    .getAttribute('data-name');
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
  
    if (computerMoveableTiles.length > 0) break;

    index = (index + 1) % getMoveablePawns().length;
  }

  let computerPawnImg = document.querySelector(`[data-name='${computerPawn}']`);

        setTimeout(() => {
          computerPawnImg.click();
          let moveIndex = Math.floor(Math.random() * computerMoveableTiles.length);
          computerMoveableTiles[moveIndex].click();
        }
        , 1000)
}
        


