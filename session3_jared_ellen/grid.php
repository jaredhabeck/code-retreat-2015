<?php
class Game {
  public $grid;

  public function __construct($size = 3) {
    $this->setGrid($size);
  }

  public function setGrid($size) {
    for ($i = 0; $i < $size; $i++) {
      $this->grid[] = [];
    }
  }
}
?>
