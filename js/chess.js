function Chess() {
  this.board = this._resetBoard();

  // this.turn; // = Player.color (the turns change with the player's color)
  this.check  = false;
  this.checkMate = false;
  this.allPieces = {
   rookb1 : new Rook ("black", 0, 0, "rook"),
   rookb2 : new Rook ("black", 0, 7, "rook"),
   knightb1 : new Knight ("black", 0, 1, "knight"),
   knightb2 : new Knight ("black", 0, 6, "knight"),
   bishopb1 : new Bishop ("black", 0, 2, "bishop"),
   bishopb2 : new Bishop ("black", 0, 5, "bishop"),
   queenb : new Queen ("black", 0, 3, "queen"),
   kingb : new King ("black", 0, 4, "king"),
   pawnb1 : new Pawn ("black", 1, 0, "pawn"),
   pawnb2 : new Pawn ("black", 1, 1, "pawn"),
   pawnb3 : new Pawn ("black", 1, 2, "pawn"),
   pawnb4 : new Pawn ("black", 1, 3, "pawn"),
   pawnb5 : new Pawn ("black", 1, 4, "pawn"),
   pawnb6 : new Pawn ("black", 1, 5, "pawn"),
   pawnb7 : new Pawn ("black", 1, 6, "pawn"),
   pawnb8 : new Pawn ("black", 1, 7, "pawn"),

   rookw1 : new Rook ("white", 7, 0, "rook"),
   rookw2 : new Rook ("white", 7, 7, "rook"),
   knightw1 : new Knight ("white", 7, 1, "knight"),
   knightw2 : new Knight ("white", 7, 6, "knight"),
   bishopw1 : new Bishop ("white", 7, 2, "bishop"),
   bishopw2 : new Bishop ("white", 7, 5, "bishop"),
   queenw : new Queen ("white", 7, 3, "queen"),
   kingw : new King ("white", 7, 4, "king"),
   pawnw1 : new Pawn ("white", 6, 0, "pawn"),
   pawnw2 : new Pawn ("white", 6, 1, "pawn"),
   pawnw3 : new Pawn ("white", 6, 2, "pawn"),
   pawnw4 : new Pawn ("white", 6, 3, "pawn"),
   pawnw5 : new Pawn ("white", 6, 4, "pawn"),
   pawnw6 : new Pawn ("white", 6, 5, "pawn"),
   pawnw7 : new Pawn ("white", 6, 6, "pawn"),
   pawnw8 : new Pawn ("white", 6, 7, "pawn"),
 };
}

Chess.prototype._resetBoard = function() {
  var board = [];
  for(var i = 0; i < 8; i++) {
    var row = [];
    for(var j = 0; j < 8; j++) {
      row.push(null);
    }
    board.push(row);
  }

  return board;
};

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


Chess.prototype._renderPieces = function(){
  this._resetBoard();

  var removeImg = document.getElementById('piece-container');
  while (removeImg.firstChild) {
    removeImg.removeChild(removeImg.firstChild);
  }

  for(var key in this.allPieces) {
    var piece = this.allPieces[key];
    var pieceContainer = document.getElementById("piece-container");
    var pieceRender = document.createElement("img");
    pieceRender.classList  = "piece";
    pieceRender.classList += " tile-position-" + piece.positionX + "-" + piece.positionY;
    pieceRender.setAttribute('src', piece.image);
    pieceRender.setAttribute('id', key);
    pieceContainer.appendChild(pieceRender);
    this.board[piece.positionX][piece.positionY] = piece;
  }
};

Chess.prototype._clickListeners = function (imgPiece) {
  console.log(imgPiece.id);
  // this.allPieces[imgPiece.id]._possiblePositions();
};
