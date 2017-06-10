function Chess() {
  this.board = this._resetBoard();
  this.currentPiece = undefined;
  this.previousBoard = undefined;
  this.turn = "white";
  this.check  = false;
  this.checkMate = false;
  this.allPieces = {
   rookb1 : new Rook ("black", 0, 0, "rook", this.board),
   rookb2 : new Rook ("black", 0, 7, "rook", this.board),
   knightb1 : new Knight ("black", 0, 1, "knight", this.board),
   knightb2 : new Knight ("black", 0, 6, "knight", this.board),
   bishopb1 : new Bishop ("black", 0, 2, "bishop", this.board),
   bishopb2 : new Bishop ("black", 0, 5, "bishop", this.board),
   queenb : new Queen ("black", 0, 3, "queen", this.board),
   kingb : new King ("black", 0, 4, "king", this.board),
   pawnb1 : new Pawn ("black", 1, 0, "pawn", this.board),
   pawnb2 : new Pawn ("black", 1, 1, "pawn", this.board),
   pawnb3 : new Pawn ("black", 1, 2, "pawn", this.board),
   pawnb4 : new Pawn ("black", 1, 3, "pawn", this.board),
   pawnb5 : new Pawn ("black", 1, 4, "pawn", this.board),
   pawnb6 : new Pawn ("black", 1, 5, "pawn", this.board),
   pawnb7 : new Pawn ("black", 1, 6, "pawn", this.board),
   pawnb8 : new Pawn ("black", 1, 7, "pawn", this.board),

   rookw1 : new Rook ("white", 7, 0, "rook", this.board),
   rookw2 : new Rook ("white", 7, 7, "rook", this.board),
   knightw1 : new Knight ("white", 7, 1, "knight", this.board),
   knightw2 : new Knight ("white", 7, 6, "knight", this.board),
   bishopw1 : new Bishop ("white", 7, 2, "bishop", this.board),
   bishopw2 : new Bishop ("white", 7, 5, "bishop", this.board),
   queenw : new Queen ("white", 7, 3, "queen", this.board),
   kingw : new King ("white", 7, 4, "king", this.board),
   pawnw1 : new Pawn ("white", 6, 0, "pawn", this.board),
   pawnw2 : new Pawn ("white", 6, 1, "pawn", this.board),
   pawnw3 : new Pawn ("white", 6, 2, "pawn", this.board),
   pawnw4 : new Pawn ("white", 6, 3, "pawn", this.board),
   pawnw5 : new Pawn ("white", 6, 4, "pawn", this.board),
   pawnw6 : new Pawn ("white", 6, 5, "pawn", this.board),
   pawnw7 : new Pawn ("white", 6, 6, "pawn", this.board),
   pawnw8 : new Pawn ("white", 6, 7, "pawn", this.board),
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

Chess.prototype.renderBoard = function () {
  this.board.forEach(function(row){ console.log(row); });
};

Chess.prototype.renderPieces = function(){
  var removeImg = document.getElementById('piece-container');
  while (removeImg.firstChild) {
    removeImg.removeChild(removeImg.firstChild);
  }

  for(var key in this.allPieces) {
    if (this.allPieces[key].alive === true) {
      var piece = this.allPieces[key];
      var pieceContainer = document.getElementById("piece-container");
      var pieceRender = document.createElement("img");
      pieceRender.classList  = "piece";
      pieceRender.classList += " tile-position-" + piece.positionX + "-" + piece.positionY;
      pieceRender.classList += " " + piece.color;
      pieceRender.setAttribute('src', piece.image);
      pieceRender.setAttribute('id', key);
      pieceContainer.appendChild(pieceRender);
      this.board[piece.positionX][piece.positionY] = piece;
    }
  }
};

Chess.prototype._clickListeners = function (imgPiece) {
  if (imgPiece.classList[2] !== this.turn) {
    return;
  }
  this.currentPiece = imgPiece;
  $('.blue').remove();
  var positions = this.allPieces[imgPiece.id]._possiblePositions();
  for (var j = 0; j < positions.length; j++) {
    var pieceContainer = document.getElementById("piece-container");
    var positionRender = document.createElement("div");
    var highlightPositions = positions[j];
    positionRender.classList = "tile-position-" + highlightPositions[0] + "-" + highlightPositions[1];
    positionRender.classList += " blue";
    pieceContainer.appendChild(positionRender);
  }
};

Chess.prototype._copyOfThisBoard = function () {
  var newBoard = [];

  for(var i = 0; i < this.board.length; i++) {
    var newRow = [];
    for (var j = 0; j < this.board[i].length; j++) {
      newRow[j] = this.board[i][j];
    }
    newBoard[i] = newRow;
  }

  return newBoard;
};

Chess.prototype._copyOfThisPreviousBoard = function () {
  var newBoard = [];

  for(var i = 0; i < this.previousBoard.length; i++) {
    var newRow = [];
    for (var j = 0; j < this.previousBoard[i].length; j++) {
      newRow[j] = this.previousBoard[i][j];
    }
    newBoard[i] = newRow;
  }

  return newBoard;
};

Chess.prototype._movementListeners = function (movement) {
  this.previousBoard = this._copyOfThisBoard();
  var imgPiece = this.currentPiece;
  $('.blue').remove();
  var move = movement;
  var a = this.allPieces[imgPiece.id].positionX;
  var b = this.allPieces[imgPiece.id].positionY;
  this.board[this.allPieces[imgPiece.id].positionX][this.allPieces[imgPiece.id].positionY] = null;
  this.allPieces[imgPiece.id].positionX = parseInt(move.classList[0].charAt(14));
  this.allPieces[imgPiece.id].positionY = parseInt(move.classList[0].charAt(16));
  var targetX = parseInt(move.classList[0].charAt(14));
  var targetY = parseInt(move.classList[0].charAt(16));
  $('.' + move.classList[0]).remove();
  var target = this.board[targetX][targetY];
  if (target !== null){
    target.deadPiece();
  }
  this.renderPieces ();
  if (this.allPieces.kingw.positionX === null) {
    var alertCheck = alert ("Check Mate, Player Black Wins!");
    this.checkMate = true;
    return;
  }
  if (this.allPieces.kingb.positionX === null) {
    var alertCheck2 = alert ("Check Mate, Player White Wins!");
    this.checkMate = true;
    return;
  }
  this.renderBoard ();
  if (this.turn === "white") {
    this.turn = "black";
  } else {
    this.turn = "white";
  }
  this._Check();
  this._Check2();
  if (this.check === true) {
    this.allPieces[imgPiece.id].positionX = a;
    this.allPieces[imgPiece.id].positionY = b;
    this.board = this._copyOfThisPreviousBoard();
    for(var key in this.allPieces) {
      var piece = this.allPieces[key];
      piece.board = this.board;
    }
    var alertCheck3 = alert ("You cannot move here or you will lose!");
    this.check = false;
    this.renderBoard ();
    this.renderPieces ();
    if (this.turn === "white") {
      this.turn = "black";
    } else {
      this.turn = "white";
    }
  }
  this.allPieces[imgPiece.id].promoteIfNeeded();
  this._Rotate();
  //this._CheckMate ();
  if (this.checkMate === true) {
    this._CheckMate (this.allPieces[imgPiece.id]);
    his.checkMate = false;
  }
};

Chess.prototype._Check = function () {

  for(var key in this.allPieces) {
    var piece = this.allPieces[key];
    if (piece.color === this.turn || piece.positionX === null) {
      continue;}
    var positions = piece._possiblePositions ();
    var kingPosition = [];
    if (positions.length === 0) {continue;}
    if (this.turn === "white") {
        kingPosition = [this.allPieces.kingw.positionX, this.allPieces.kingw.positionY];
      } else {
        kingPosition = [this.allPieces.kingb.positionX, this.allPieces.kingb.positionY];
      }
    for (var i = 0; i < positions.length; i++) {
      if (positions[i].toString() === kingPosition.toString()) {
        if (this._checkMate()) {
            if (confirm("check mate! Play Again?")) {
              location.reload();
            }
        } else {
          alert ("check");
        }

        //this.checkMate = true;
      }
    }
  }
};

Chess.prototype._Check2 = function () {

  for(var key in this.allPieces) {
    var piece = this.allPieces[key];
    if (piece.color !== this.turn || piece.positionX === null) {
      continue;}
    var positions = piece._possiblePositions ();
    var kingPosition = [];
    if (positions.length === 0) {continue;}
    if (this.turn === "white") {
        kingPosition = [this.allPieces.kingb.positionX, this.allPieces.kingb.positionY];
      } else {
        kingPosition = [this.allPieces.kingw.positionX, this.allPieces.kingw.positionY];
      }
    for (var i = 0; i < positions.length; i++) {
      if (positions[i].toString() === kingPosition.toString()) {
        this.check = true;

      }
    }
  }

};


Chess.prototype._Rotate = function () {
  var rotation = this.turn === "white" ? "rotate(0deg)" : "rotate(180deg)";
  document.getElementById("piece-container").style.transform = rotation;

  $('.piece').each(function(i, el) {
    el.style.transform = $(el).css('transform') + ' ' + rotation;
  });
};

Chess.prototype._isCheckOnBoard = function (board, color) {
  return false;
};

Chess.prototype._checkMate = function () {
      var checkMate = true;

      for(var key in this.allPieces) {
        var piece = this.allPieces[key];

        if(piece.color === this.turn && checkMate) {
          for(var i = 0; i < piece._possiblePositions().length && checkMate; i++) {
            var newBoard = this._copyOfThisBoard();
            var position = piece._possiblePositions()[i];
            newBoard[position[0]][position[1]] = piece;
            newBoard[piece.positionX][piece.positionY] = null;
            checkMate = this._isCheckOnBoard(newBoard, this.turn);
          }
        }
      }
      return checkMate;
};
