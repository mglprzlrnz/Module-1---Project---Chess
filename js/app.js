var game ;

window.onload = function () {

  game = new Chess();
  game._renderPieces();
  game._renderBoard();


//   var clickPiece = document.getElementsByClassName("piece");
//   for (var i = 0; i < clickPiece.length; i++) {
//      clickPiece[i].addEventListener('click', function() {
//        game._clickListeners(this);
//      });
//   }
//   var clickMovement = document.getElementsByClassName("blue");
//   for (var j = 0; j < clickMovement.length; j++) {
//      clickPiece[j].addEventListener('click', function() {
//        game._movementListeners(this);
//      });
//   }
// };

$(document).ready(function() {
$(document).on("click", ".piece", function(){
  game._clickListeners(this);
});
$(document).on("click", ".blue", function(){
  game._movementListeners(this);
});
});
};
