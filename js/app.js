var game ;

window.onload = function () {

  game = new Chess();
  game._renderPieces();
  game._renderBoard();

  var clickPiece = document.getElementsByClassName("piece");

  for (var i = 0; i < clickPiece.length; i++) {
     clickPiece[i].addEventListener('click', function() {
       game._clickListeners(this)
     });
  }

};
