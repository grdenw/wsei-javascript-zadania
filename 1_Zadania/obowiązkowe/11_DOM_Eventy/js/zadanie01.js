// zadanie 1

document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})



// Consola wyrzuca nam błąd, że nie moze dostac sie do listy klas elementu typu null, dzieje sie tak dlatego ze skrypt zostal wczystany przed elemantymai DOM i nie wykryl poszukiwanego elementu

// Umieszczenie skryptu w evencie DOMContentLoaded popraiwa sytułacje z uwagi na to ze skrypt odpala sie po zalogowaniu elementow dom i jest w stanie go wyszukac

// Nie ma roznicy, działa to na takiej samej zasadzie skrypt uruchamiany jest po załadowaniu drzewa
