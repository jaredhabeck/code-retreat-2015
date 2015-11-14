function Cell() {
  this.x_position;
  this.y_position;

  this.is_alive = function() {
    return true;
  }

  this.positionX = function() {
    return this.x_position;
  }

  this.positionY = function() {
    return this.y_position;
  }

}
