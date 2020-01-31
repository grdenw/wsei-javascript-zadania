/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */
// Zadanie 0

// deklaracja funkcji jeden
function jeden() {

    //deklaracja zmiennej1, do ktorej mozliwy jest dostępy tylko w obecnym bloku oraz blokach podrzednych
    var zmienna1 = 1;

    //Deklaracja funckji w fukcnji stworzenie bloku podrzednego
    function dwa() {

        //Brak dostepu do zmiennej jeden z uwagi na wywołanie w bloku podrzednym
        console.log(zmienna1);

        //Deklaracja zmiennej2 dostepnej w bloku funckji dwa
        var zmienna2 = 3;
    }

    //Wyołanie fukncji, zostania ona tez wywołana przy wywołaniu funckji 1
    dwa();

    //Brak dostepu do zmiennej2 poniewaz jest ona nie okreslona w bloku funckji jeden tylko w bloku podrzednym
    // console.log(zmienna2)
}

//wywołanie funckji jeden
jeden()

// Zadanie 1

/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funckji sortArray
function sortArray() {

    //deklaracja zmiennej tablicy z polami typu number
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wykonanie na tablciy okreslonej funkcji tablicowej.
    points.sort(function (a, b) {
        //zwrocenie do tablicy pol a - b
        return a - b;
    });

    //Zwrocenie posortowanej tablicy
    return points;
}

//Wywołanie funkcji, która zwraca posortowana tablice
sortArray()

// Zadanie 02


function callOtherFunction(nameOfFunction) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b)
    console.log("Wynik", a + b)
})

callOtherFunction(function (a, b) {
    console.log(`suma liczb: ${a + b}`)
})

callOtherFunction(function (a, b) {
    console.log(`roznica liczb: ${a - b}`)
})