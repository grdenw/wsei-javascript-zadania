// Zadanie 0

function distFromAvarage(starterNumberArr = []) {
    let amountOfItemsArr = 0;
    const newArr = [];

    starterNumberArr.forEach(item => amountOfItemsArr += item)

    const avr = amountOfItemsArr / starterNumberArr.length

    starterNumberArr.forEach(item => newArr.push(item - avr))

    return newArr
}


const test = distFromAvarage([1, 2, 3, 4, 5, 6, 7])

console.log(test)

// Zadanie 1

const favouriteFruitArr = ["orange", "lemon", "apple", "pearl"];

console.log(favouriteFruitArr[0]);
console.log(favouriteFruitArr[favouriteFruitArr.length - 1]);
for (let i = 0; i < favouriteFruitArr.length; i++) {
    console.log(favouriteFruitArr[i])
}

// Zadanie 2


function createArray(number) {
    const newArray = [];

    if (number > 0) {
        for (let counter = 0; counter <= number; counter++) {
            newArray.push(counter);
        }
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// zadanie 3

function printTable(array = []) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

printTable([1, 2, 3])

// zadanie 4

function multiply(array = []) {
    let multiplyAmount = 1;
    for (let i = 0; i < array.length; i++) {
        multiplyAmount = multiplyAmount * array[i]
    }
    return multiplyAmount
}

const multiplyArrAmount = multiply([1, 2, 3, 4, 5, 6, 7]);

console.log(multiplyArrAmount)

// zadanie 6

function sortArray(array = []) {
    return array.sort()
}

const sortedArr = sortArray([145, 11, 3, 64, 4, 6, 10]);

console.log(sortedArr)

// zadanie 7

function addArrays(arrayA = [], arrayB = []) {
    const addedItemsArray = [];
    const longerArrayLength = arrayA.length > arrayB.length
        ? arrayA.length
        : arrayB.length;

    for (let i = 0; i < longerArrayLength; i++) {
        addedItemsArray.push(arrayA[i]
            ? arrayA[i]
            : 0 +
            arrayB[i]
                ? arrayB[i]
                : 0)
    }

    return addedItemsArray;
}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]))