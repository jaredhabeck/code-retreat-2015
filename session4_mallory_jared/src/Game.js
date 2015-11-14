function Game() {
  this.grid = new Grid();
};

function Grid() {
  this.cell = new Cell();
};

function Cell() {
  return [1];
};
