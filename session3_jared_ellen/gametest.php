<?php
include('grid.php');
class GameTest extends PHPUnit_Framework_TestCase {
  private $grid, $generated_grid;

  public function __construct() {
    //$this->game = new Game();
  }

  public function testGameCreatesDefaultGrid() {
    $this->assertClassHasAttribute('grid', 'Game');
    //$this->assertEquals(count(3), $this->game->grid);
  }

  public function testGridDefaultSize() {
    $this->assertEquals(3, count($this->game->grid));
  }

  public function testGridDoesNotAcceptNegatives() {
    $game = new Game(-1);
    #$this->assertEquals(3, count($this->game->grid));
  }
}
?>
