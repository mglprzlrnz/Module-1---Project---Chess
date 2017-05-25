function King (color, positionX, positionY, image, alive) {
    Piece.call(this, color, positionX, positionY, image);
}

King.prototype = Object.create(Piece.prototype);
