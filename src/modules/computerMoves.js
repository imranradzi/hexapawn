// import { pawn } from './boardPieces';

let compColor = 'b';

const filterColoredPawns = (pawn) => {
  if (pawn.getAttribute('data-name')[0] === compColor) return true;
}

export const getMoveablePawns = () => {
  return [...document.querySelectorAll('.tile > img')].filter(filterColoredPawns);
}

export const getRandomPawn = () => {
  let index = Math.floor(Math.random() * 2);
  return getMoveablePawns(0)[index];
}


