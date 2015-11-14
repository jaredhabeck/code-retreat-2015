describe("Cell", function() {
  var cell = new Cell();

  describe("it is alive", function() {
    it("says if it is alive", function() {
      expect(cell.is_alive()).toBe(true);
    });
  });

  it("can have its position set", function() {
    cell.x_position = 1;
    cell.y_position = 1;
    expect(cell.positionX()).toBe(1);
    expect(cell.positionY()).toBe(1);
  });
});

describe("Board", function() {
  var board = new Board();
  it("can get a cell from a position", function() {
  });
});
