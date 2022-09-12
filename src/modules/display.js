import { infoDisplay, blackScore, whiteScore } from './domElements';
import { gameFlow } from './gameFlow';

export const changeInfo = (text) => {
  infoDisplay.textContent = text;
}

export const changeScore = (color) => {
  if (color === 'black') {
    blackScore.textContent = 
    gameFlow.getBlackScore();
  } else if (color === 'white') {
    whiteScore.textContent = 
    gameFlow.getWhiteScore();
  }
}

