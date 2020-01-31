// Zadanie 0
const car = {
    brand: "Mercedes",
    color: "Czarny",
    numberOfKlimoters: 0,
    printCarInfo: function(){
        console.log(this.color, this.brand, this.numberOfKlimoters)
    },
    drive: function(numberOfKilometers) {
        this.numberOfKlimoters += numberOfKilometers
    }
}

car.printCarInfo()
car.drive(20);
car.printCarInfo()

// zadanie 1

car.review = ["12-09", "12-02", "12-03"];

car.addReview = function (reviewItem) {
    this.review.push(reviewItem)
}

car.showReview = function (reviewItem) {
    return this.review
}

// zadanie 2

var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function () {
        return this.a + this.b
    },
    multiply: function () {
        return this.a * this.b
    }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());

// zadanie 3

const stairs  = {
    steps: 0,
    up: function () {
        this.steps++
    },
    down: function () {
        this.steps--
    },
    printStep: function () {
        console.log(this.steps)
    },
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep()
