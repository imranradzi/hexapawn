const domElements = (() => {

})();

const gameFlow = (() => {

})();

const player = (name, color) => {
  const getName = () => {
    return name;
  }
  const getColor = () => {
    return color;
  }
  return {getName, getColor};
};

const pawn = (color) => {
  const getColor = () => {
    return color;
  }
  return {getColor};
};

const gameBoard = (() => {
  
})();