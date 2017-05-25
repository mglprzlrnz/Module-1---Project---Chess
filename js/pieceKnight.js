function Knight (color, positionX, positionY, image, alive) {
    Piece.call(this, color, positionX, positionY, image);
}

Knight.prototype = Object.create(Piece.prototype);
