function Pawn (color, positionX, positionY, image, board, alive) {
    Piece.call(this, color, positionX, positionY, image, board, alive);
}

Pawn.prototype = Object.create(Piece.prototype);

// Pawn.prototype._moveForward = function () {
//   if (this.color === "white") {
//     if (this.positionX <= 6) {
//       this.positionX = this.positionX - 1;
//     }
//   }
// };

// Pawn.prototype._possiblePositions = function () {
//   var step = this.color === "white" ? -1 : 1;
//   var possiblePositions = [[this.positionX + step, this.positionY],[this.positionX + step,
//                       this.positionY + 1],[this.positionX + step, this.positionY - 1]];
//   if (this.color === "white" && this.positionX === 6 || this.color === "black" && this.positionX === 1){
//     possiblePositions.push([this.positionX + step + step, this.positionY]);
//   }
//   var resultPossiblePositions = this._removeOutsidePositions(possiblePositions);
//   resultPossiblePositions = this._removeOtherPositions(resultPossiblePositions);
//   return resultPossiblePositions;
// };
// mirar porque no pfunciona la funcion de abajo
// Pawn.prototype._removeOtherPositions = function (resultPossiblePositions){
//   var length = resultPossiblePositions.length - 1;
//   for (var i = length; i > 0 ; i++) {
//     var position = resultPossiblePositions[i];
//     if (this.board[position[0]][position[1]] !== null &&
//         this.board[position[0]][position[1]].color === this.color) {
//       resultPossiblePositions.splice(i,1);
//     }
//   }
//   return resultPossiblePositions;
//
// };

Pawn.prototype._possiblePositions = function () {
  var resultPossiblePositions = [];
  var step = this.color === "white" ? -1 : 1;
  if (this.color === "white" && this.positionX === 6 || this.color === "black" && this.positionX === 1){
    if (this.board[this.positionX + 2*step][this.positionY] === null &&
      this.board[this.positionX + step][this.positionY] === null ) {
      resultPossiblePositions.push([this.positionX + 2*step, this.positionY]);
    }
  }
  if ((this.positionX + step) <= 7 && (this.positionX + step) >= 0) {
      if (this.board[this.positionX + step][this.positionY] === null) {
    resultPossiblePositions.push([this.positionX + step, this.positionY]);
    }
  }
  if ((this.positionX + step) <= 7 && (this.positionX + step) >= 0 && (this.positionY + 1) <= 7) {
      if (this.board[this.positionX + step][this.positionY + 1] !== null &&
      this.board[this.positionX + step][this.positionY + 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX + step, this.positionY + 1]);
    }
  }
  if ((this.positionX + step) <= 7 && (this.positionX + step) >= 0 && (this.positionY - 1) >= 0) {
      if (this.board[this.positionX + step][this.positionY - 1] !== null &&
      this.board[this.positionX + step][this.positionY - 1].color !== this.color) {
    resultPossiblePositions.push([this.positionX + step, this.positionY - 1]);
    }
  }
  return resultPossiblePositions;
};

Piece.prototype.promoteIfNeeded = function() {
  if(this.color === 'black' && this.positionX === 7 ||
     this.color === 'white' && this.positionX === 0) {
       var queen = new Queen(
          this.color,
          this.positionX,
          this.positionY,
          'queen',
          this.board
        );

        this.board[this.positionX][this.positionY] = queen;

        for(var key in game.allPieces) {
          if(game.allPieces[key] === this) {
            game.allPieces[key] = queen;
          }
        }

        game.renderPieces();
  }
};
