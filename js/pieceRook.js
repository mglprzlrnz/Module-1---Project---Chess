function Rook (color, positionX, positionY, image, board) {
    Piece.call(this, color, positionX, positionY, image, board);
}

Rook.prototype = Object.create(Piece.prototype);

Rook.prototype._possiblePositions = function () {
  var resultPossiblePositions = [];
  var i = 1;
  while ((this.positionX - i) >= 0 && this.board[this.positionX - i][this.positionY] === null) {
    resultPossiblePositions.push([this.positionX - i, this.positionY]);
    i++;
  }
  if ((this.positionX - i) >= 0 && this.board[this.positionX - i][this.positionY] !== null &&
    this.board[this.positionX - i][this.positionY].color !== this.color){
    resultPossiblePositions.push([this.positionX - i, this.positionY]);
  }
  i = 1;
  while ((this.positionY + i) <= 7 && this.board[this.positionX][this.positionY + i] === null) {
    resultPossiblePositions.push([this.positionX, this.positionY + i]);
    i++;
  }
  if ((this.positionY + i) <= 7 && this.board[this.positionX][this.positionY + i] !== null &&
    this.board[this.positionX][this.positionY + i].color !== this.color){
    resultPossiblePositions.push([this.positionX, this.positionY + i]);
  }

  i = 1;
  while ((this.positionY - i) >= 0 && this.board[this.positionX][this.positionY - i] === null) {
    resultPossiblePositions.push([this.positionX, this.positionY - i]);
    i++;
  }
  if ((this.positionY - i) >= 0 && this.board[this.positionX][this.positionY - i] !== null &&
    this.board[this.positionX][this.positionY - i].color !== this.color){
    resultPossiblePositions.push([this.positionX, this.positionY - i]);
  }
  i = 1;
  while ((this.positionX + i) <= 7 && this.board[this.positionX + i][this.positionY] === null) {
    resultPossiblePositions.push([this.positionX + i, this.positionY]);
    i++;
  }
  if ((this.positionX + i) <= 7 && this.board[this.positionX + i][this.positionY] !== null &&
      this.board[this.positionX + i][this.positionY].color !== this.color){
      resultPossiblePositions.push([this.positionX + i, this.positionY]);
  }
  return resultPossiblePositions;
};
