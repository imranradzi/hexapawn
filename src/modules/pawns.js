import { gameFlow } from './gameFlow';

export const pawn = (name, color, row, column) => {
  const pawnName = name;
  const pawnColor = color;
  const pawnImg = document.createElement('img');
  let pawnRow = row;
  let pawnColumn = column;

  const getName = () => pawnName;
  const getColor = () => pawnColor;
  const getRow = () => pawnRow;
  const getColumn = () => pawnColumn;

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
  };

  const calculateLegalMoves = () => {
    const pawnRowInt = parseInt(pawnRow, 10);
    let forwardRow = '';

    if (
      (getColor() === 'black' && pawnRow === '1')
      || (getColor() === 'white' && pawnRow === '3')) {
      return [];
    }

    if (getColor() === 'black' && pawnRow !== '1') {
      forwardRow = pawnRowInt - 1;
    } else if (getColor() === 'white' && pawnRow !== '3') {
      forwardRow = pawnRowInt + 1;
    }

    const calculateForwardMove = () => {
      const forwardColumn = [];
      if (gameFlow.getPawnImg(forwardRow, getColumn(), getColor())
        === 'no') {
        forwardColumn.push(`${forwardRow.toString()}${pawnColumn}`);
      }
      return forwardColumn;
    };

    const calculateDiagonalMove = () => {
      let diagonalColumn = [];
      if (
        pawnColumn === 'a' || pawnColumn === 'c'
      ) {
        if (
          gameFlow.getPawnImg(forwardRow, 'b', getColor())
        !== 'no'
        && gameFlow.getPawnImg(forwardRow, 'b', getColor())[0]
        !== getColor()[0]) {
          diagonalColumn = ['b'];
        }
      } else if (pawnColumn === 'b') {
        const validColumn = ['a', 'c'];
        validColumn.forEach((col) => {
          if (
            gameFlow.getPawnImg(forwardRow, col, getColor())
            !== 'no'
            && gameFlow.getPawnImg(forwardRow, col, getColor())[0]
            !== getColor()[0]) {
            diagonalColumn.push(col);
          }
        });
      }

      const moveableTile = [];
      diagonalColumn.forEach((i) => {
        moveableTile.push(`${forwardRow.toString()}${i}`);
      });
      return moveableTile;
    };

    return calculateForwardMove()
      .concat(calculateDiagonalMove());
  };

  return {
    getName,
    getColor,
    getRow,
    getColumn,
    pawnImg,
    pawnMove,
    calculateLegalMoves,
  };
};

export const pawns = (() => {
  const abc = ['a', 'b', 'c'];
  const list = {};

  for (let i = 1; i < 4; i++) {
    list[`bpawn${i}`] = pawn(`bpawn${i}`, 'black', '3', abc[i - 1]);
    list[`wpawn${i}`] = pawn(`wpawn${i}`, 'white', '1', abc[i - 1]);
  }

  const getList = () => list;

  const removePawn = (pawnName) => {
    delete list[pawnName];
  };

  const resetPawns = () => {
    for (let i = 1; i < 4; i++) {
      list[`bpawn${i}`] = pawn(`bpawn${i}`, 'black', '3', abc[i - 1]);
      list[`wpawn${i}`] = pawn(`wpawn${i}`, 'white', '1', abc[i - 1]);
    }
  };

  return { getList, removePawn, resetPawns };
})();
