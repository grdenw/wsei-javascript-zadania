// zadanie 0a

const city = {
    capital: "Cracow",
    population: 12314,
    presidient: "Duda",
    primeMinister: ["Duda", "Kaczyński", "Tusk"]
}

const {capital, population, presidient, primeMinister} = city;

console.log(capital, population, presidient, primeMinister);

// zadanie 0b

const timeMachine = {
    shape: "circle",
    model: "new",
    run: function (data, place) {
        console.log(data)
        console.log(place)
    }
}

const {shape, model} = timeMachine;

console.log(shape, model)

timeMachine.run("19-08-1993", "Cracow");

// zadanie 1

const book = {
    title: "Harry Potter",
    author: "J.K.Rowling",
    numberOfPages: 1234,
}

const {title, author, numberOfPages} = book;

console.log(title, author, numberOfPages);

// zadanie 2

const person = {
    name: "Jarosław",
    age: 32,
    sayHello: function () {
        console.log("Hello")
    }
}

const {name, age} = person;

console.log(name, age);

person.sayHello();

// zadanie 3

const recipe = {
    titleRecipe: "Kanapka",
    servings: 12,
}

const {titleRecipe, servings, ingredients = ["Chleb", "Szynka"]} = recipe;

console.log(titleRecipe, servings, ingredients);

// zadanie 4

var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (const property in movie) {
    console.log(`${property}: ${movie[property]}`);
}


// zadanie 5

var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

for (const property in animals) {
    console.log(`${property}: ${animals[property]}`);
}

for(let i = 0; i < (Object.values(animals)).length; i++) {
    console.log((Object.values(animals))[i])
}

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist)