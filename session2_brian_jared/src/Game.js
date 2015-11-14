function Game() {
  this.isPlaying = false;

  this.play = function() { this.isPlaying = true; }
}

function GameBoard() {
  this.size = 0;
  this.generated;
  this.generate = function(size) {
    this.generated = new Array(size);
  }
};
