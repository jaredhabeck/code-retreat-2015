describe("Game", function() {
  it("is a game", function() {
    var game = new Game();
    expect(typeof game).toBe('object');
  });

  it("is has a grid", function() {
    var game = new Game();
    expect(typeof game.grid).not.toBe('undefined');
  });
});

describe("Grid", function() {
  it("is a grid", function() {
    var grid = new Grid();
    expect(typeof grid).toBe('object');
  });

  it("has a cell", function() {
    var grid = new Grid();
    expect(grid.cell instanceof Cell).toEqual(true);
  });

});

describe("Cell", function() {
  it("is a cell", function() {
    var cell = new Cell();
    expect(typeof cell).toBe('object');
  });

  it("has life", function() {
    var cell = new Cell();
    expect(cell.length).toEqual(1);
  });
});
