function Pawn (color, positionX, positionY, image, board) {
    Piece.call(this, color, positionX, positionY, image, board);
}

Pawn.prototype = Object.create(Piece.prototype);

// Pawn.prototype._moveForward = function () {
//   if (this.color === "white") {
//     if (this.positionX <= 6) {
//       this.positionX = this.positionX - 1;
//     }
//   }
// };

Pawn.prototype._possiblePositions = function () {
  var step = this.color === "white" ? -1 : 1;
  var possiblePositions = [[this.positionX + step, this.positionY],[this.positionX + step,
                      this.positionY + 1],[this.positionX + step, this.positionY - 1]];
  if (this.color === "white" && this.positionX === 6 || this.color === "black" && this.positionX === 1){
    possiblePositions.push([this.positionX + step + step, this.positionY]);
  }
  var resultPossiblePositions = this._removeOutsidePositions(possiblePositions);
  // resultPossiblePositions = this._removeOtherPositions(resultPossiblePositions);
  return resultPossiblePositions;
};
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
