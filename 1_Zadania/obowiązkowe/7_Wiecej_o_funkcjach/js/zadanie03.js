// zadanie 03

// wywołanie funckji hello
sayCzesc();

function sayCzesc() {
    console.log("Czesc")
}

// wywołanie funckji hello
sayCzesc();

// Zarowno pierwsze jak i drugie wywołanie jest mozliwe

// Nie da sie wywołac funckji przypisanej do zmiennej powyzej jej deklaracji
// sayWitaj();

var sayWitaj = function () {
    console.log("witaj")
}

sayWitaj()