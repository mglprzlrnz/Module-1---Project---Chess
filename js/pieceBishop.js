function Bishop (color, positionX, positionY, image, board, alive) {
    Piece.call(this, color, positionX, positionY, image, board, alive);
}

Bishop.prototype = Object.create(Piece.prototype);

Bishop.prototype._possiblePositions = function () {
  var resultPossiblePositions = [];
  var i = 1;
  while ((this.positionX - i) >= 0 && (this.positionY - i) >= 0 &&
    this.board[this.positionX - i][this.positionY - i] === null) {
    resultPossiblePositions.push([this.positionX - i, this.positionY - i]);
    i++;
  }
  if ((this.positionX - i) >= 0 && (this.positionY - i) >= 0 && this.board[this.positionX - i][this.positionY - i] !== null &&
    this.board[this.positionX - i][this.positionY - i].color !== this.color){
    resultPossiblePositions.push([this.positionX - i, this.positionY - i]);
  }
  i = 1;
  while ((this.positionX - i) >= 0 && (this.positionY + i) <= 7 &&
    this.board[this.positionX - i][this.positionY + i] === null) {
    resultPossiblePositions.push([this.positionX - i, this.positionY + i]);
    i++;
  }
  if ((this.positionX - i) >= 0 && (this.positionY + i) <= 7 && this.board[this.positionX - i][this.positionY + i] !== null &&
    this.board[this.positionX - i][this.positionY + i].color !== this.color){
    resultPossiblePositions.push([this.positionX - i, this.positionY + i]);
  }
  i = 1;
  while ((this.positionX + i) <= 7 && (this.positionY - i) >= 0 &&
    this.board[this.positionX + i][this.positionY - i] === null) {
    resultPossiblePositions.push([this.positionX + i, this.positionY - i]);
    i++;
  }
  if ((this.positionX + i) <= 7 && (this.positionY - i) >= 0 && this.board[this.positionX + i][this.positionY - i] !== null &&
    this.board[this.positionX + i][this.positionY - i].color !== this.color){
    resultPossiblePositions.push([this.positionX + i, this.positionY - i]);
  }
  i = 1;
  while ((this.positionX + i) <= 7 && (this.positionY + i) <= 7 &&
    this.board[this.positionX + i][this.positionY + i] === null) {
    resultPossiblePositions.push([this.positionX + i, this.positionY + i]);
    i++;
  }
  if ((this.positionX + i) <= 7 && (this.positionY + i) <= 7 && this.board[this.positionX + i][this.positionY + i] !== null &&
    this.board[this.positionX + i][this.positionY +i].color !== this.color){
    resultPossiblePositions.push([this.positionX + i, this.positionY + i]);
  }
  return resultPossiblePositions;
};
