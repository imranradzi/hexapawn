import './styles.css';
import { gameBoard } from './modules/boardPieces';

const player = (name, color) => {
  const getName = () => {
    return name;
  }
  const getColor = () => {
    return color;
  }
  return { getName, getColor };
};

gameBoard.displayPawns();

