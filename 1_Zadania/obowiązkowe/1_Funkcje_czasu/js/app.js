function countHello(maxCounterValue = 0) {
    if(typeof maxCounterValue == "number" && Number.isInteger(maxCounterValue) && maxCounterValue > 0 && maxCounterValue < 10) {
        let counter = 0;
        const intervalId = setInterval(function () {
            counter++;
            console.log(`Hello ${counter}`);
            if(counter == maxCounterValue) {
                clearInterval(intervalId);
            }
        }, 1000)


    }
}
