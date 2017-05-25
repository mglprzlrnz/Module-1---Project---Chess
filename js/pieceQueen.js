function Queen (color, positionX, positionY, image, alive) {
    Piece.call(this, color, positionX, positionY, image);
}

Queen.prototype = Object.create(Piece.prototype);
