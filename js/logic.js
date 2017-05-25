function Chess() {
  this.board = [
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
  ];

  // this.turn; // = Player.color (the turns change with the player's color)
  this.check  = false;
  this.checkMate = false;

}

Chess.prototype._getAvailablePosition = function () {
  var emptyTiles = [];

  this.board.forEach(function(row, rowIndex){
    row.forEach(function(elem, colIndex){
      if (!elem) emptyTiles.push({ x: rowIndex, y: colIndex });
    });
  });
  return emptyTiles;
};

Chess.prototype._renderBoard = function () {
  this.board.forEach(function(row){ console.log(row); });
};


var rookb1 = new Rook ("black", 0, 0, "rook");
var rookb2 = new Rook ("black", 0, 7, "rook");
var knightb1 = new Knight ("black", 0, 1, "knight");
var knightb1 = new Knight ("black", 0, 6, "knight");
var bishopb1 = new Bishop ("black", 0, 2, "bishop");
var bishopb1 = new Bishop ("black", 0, 5, "bishop");
var queenb = new Queen ("black", 0, 4, "queen");
var kingb = new King ("black", 0, 3, "king");
var pawnb1 = new Pawn ("black", 1, 0, "pawn");
var pawnb2 = new Pawn ("black", 1, 1, "pawn");
var pawnb3 = new Pawn ("black", 1, 2, "pawn");
var pawnb4 = new Pawn ("black", 1, 3, "pawn");
var pawnb5 = new Pawn ("black", 1, 4, "pawn");
var pawnb6 = new Pawn ("black", 1, 5, "pawn");
var pawnb7 = new Pawn ("black", 1, 6, "pawn");
var pawnb8 = new Pawn ("black", 1, 7, "pawn");


var rookw1 = new Rook ("white", 7, 0, "rook");
var rookw2 = new Rook ("white", 7, 7, "rook");
var knightw1 = new Knight ("white", 7, 1, "knight");
var knightw1 = new Knight ("white", 7, 6, "knight");
var bishopw1 = new Bishop ("white", 7, 2, "bishop");
var bishopw1 = new Bishop ("white", 7, 5, "bishop");
var queenw = new Queen ("white", 7, 4, "queen");
var kingw = new King ("white", 7, 3, "king");
var pawnw1 = new Pawn ("white", 6, 0, "pawn");
var pawnw2 = new Pawn ("white", 6, 1, "pawn");
var pawnw3 = new Pawn ("white", 6, 2, "pawn");
var pawnw4 = new Pawn ("white", 6, 3, "pawn");
var pawnw5 = new Pawn ("white", 6, 4, "pawn");
var pawnw6 = new Pawn ("white", 6, 5, "pawn");
var pawnw7 = new Pawn ("white", 6, 6, "pawn");
var pawnw8 = new Pawn ("white", 6, 7, "pawn");
