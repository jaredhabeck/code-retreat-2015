describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should start in a non playing state", function() {
    expect(game.isPlaying).toBeFalsy();
  });

  it("should play, starting the game", function() {
    game.play();
    expect(game.isPlaying).toBeTruthy();
  });
});

describe("Game Board", function(){
  var gameBoard;

  beforeEach(function() {
    gameBoard = new GameBoard();
  });

  it("Should generate empty gameboard", function(){
    var board = gameBoard.generate();
    expect(board.length).toEqual(0);
  });

  it("Should generate a default board size", function(){
    var defaultBoardSize = 3;
    var board = gameBoard.generate(defaultBoardSize);
    expect(board.length).toEqual(defaultBoardSize);
  });

});

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
