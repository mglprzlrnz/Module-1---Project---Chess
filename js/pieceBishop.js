function Bishop (color, positionX, positionY, image, alive) {
    Piece.call(this, color, positionX, positionY, image);
}

Bishop.prototype = Object.create(Piece.prototype);
