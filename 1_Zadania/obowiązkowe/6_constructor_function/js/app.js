// zadanie 0

function Basket(products = [], sum = 0) {
    this.products = products;
    this.sum = sum;
    this.addProduct = function (name, price) {
        this.products.push(name, price)
    }
    this.showBasket = function () {
        this.products.forEach( item => console.log(item))
    }
}

const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

// zadanie 1

var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};

// zadanie 2

const Calculator = function () {
    this.operationHistory = [];
}

Calculator.prototype.add = function(num1, num2)  {
    this.operationHistory.push(`added ${num1} to ${num2} got ${num1 + num2}`);
    console.log(this)
    return num1 + num2;
};

Calculator.prototype.multiply = function (num1, num2) {
    this.operationHistory.push(`multiplied ${num1} with ${num2} got ${num1 * num2}`);
    return num1 * num2;
};

Calculator.prototype.substract = function (num1, num2) {
    this.operationHistory.push(`substracted ${num1} from ${num2} got ${num1 - num2}`);
    return num1 - num2;
};

Calculator.prototype.divide = function (num1, num2) {
    this.operationHistory.push(`divided ${num1} by ${num2} got ${num1 % num2}`);
    return num1 % num2;
};

Calculator.prototype.printOperations = function () {
    this.operationHistory.forEach(item => console.log(item))
}

Calculator.prototype.clearOperations = function () {
    this.operationHistory = []
}


const calc = new Calculator();

calc.add(1,2);
calc.clearOperations()
calc.printOperations();