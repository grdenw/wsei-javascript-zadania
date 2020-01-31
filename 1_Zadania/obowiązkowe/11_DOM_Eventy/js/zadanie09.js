// Zadanie 9

document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var b = document.getElementById("b");

  // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
  // addEventListener to właśnie document)
  console.log("obiekt document: ", this);

  a.addEventListener("click", function (event) {
      // Tutaj this wskazuje na element DOM o id a
      console.log("a: ", this);
  });

  b.addEventListener("click", function (event) {
      // Tutaj this wskazuje na element DOM o id b
      console.log("b: ", this);


      function innerFuncOne() {
          // Tutaj this wskazuje na element Window, bo funkcja została
          //wywołana bez żadnego kontekstu.
          console.log("innerFuncOne: ", this);
          
      }
      innerFuncOne();

  });

})

//Zeby zmienic kolor b za pomoca funkcji FuncOne zmieniłbym ja na funkcje strzałkowa  = () => {}, wtedy this wskazywalo by na element porzadany i mozna bylo mu zmienic kolor za pomoca .style.backgroundColor
