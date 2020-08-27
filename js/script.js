// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function() {
  // ciclo per clonare i quadrati
  for (var i = 0; i < 36; i++) {
    var square = $('.template .square').clone();
    $('.square-ctr').append(square);
  }
  //click sul quadrato
  $(document).on('click', '.square', function(){
    var clickedSquare = $(this);
    // controllo sul click
    if (clickedSquare.hasClass('clicked')) {
      alert('Attenzione! Hai già cliccato questo quadrato');
    } else {
      // ajax
      $.ajax(
        {
          // API
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          // scrittura del numero casuale nel quadrato
          success: function(randomNumber) {
            var number = randomNumber.response;
            clickedSquare.find('.number').text(number);
            // aggiunta di colori e classe clicked in base al numero casuale
            if (number <= 5) {
              clickedSquare.addClass('clicked yellow');
            } else {
              clickedSquare.addClass('clicked green');
            }
          },
          // errore
          error: function(errore) {
          alert("E' avvenuto un errore." + errore);
          }
        }
      );
    }
  });
});
