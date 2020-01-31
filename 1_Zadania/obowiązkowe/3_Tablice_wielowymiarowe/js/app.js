// Zadanie 0

function checkArray(arr) {
    const arrayCheck = [];
    arr.forEach( item => {
        if( item[0] % 2 == 0 && item[1] % 2 == 0) {
            arrayCheck.push(true)
        } else {
            arrayCheck.push(false)
        }
    })

    return arrayCheck;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

// Zadanie 1

var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

console.log(task1Array[3][2]);
console.log(task1Array[4][2]);
console.log(task1Array[1].length);


// Zadanie 2

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

task2Array.forEach( item => console.log(item));
task2Array.forEach( item => console.log(item.length));
task2Array.forEach( item => item.forEach(item => console.log(item)));

// Zadanie 3

function print2DArray(arr) {
    arr.forEach( item => item.forEach(item => console.log(item)))
}


print2DArray([[1,2], [3,4]])

// Zadanie 4


const twoDArr = [[6,7], [3,9]]

print2DArray(twoDArr)

// Zadanie 5

function create2DArray(rows, columns) {
    let counter = 0;
    const rowArr = [];
    for(let i = 0; i < rows; i++) {
        rowArr.push([])
        for( let j = 0; j < columns; j++) {
            counter++;
            rowArr[i].push(counter)
        }
    }
    return rowArr
}

create2DArray(4, 4)
