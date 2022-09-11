// import { pawn } from './boardPieces';

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


