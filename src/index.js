import './styles.css';
import { gameBoard } from './modules/board';

gameBoard.displayPawns();
[...document.querySelectorAll('.tile > img')]
  .forEach((el) => {
    el.classList.add('animation');
    setTimeout(() => {
      el.classList.remove('animation');
    }, 1000);
  })
