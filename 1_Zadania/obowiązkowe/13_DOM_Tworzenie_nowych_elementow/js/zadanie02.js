// zadanie 2

document.querySelector(".button").addEventListener("click", function () {
    const tr = document.createElement("tr")
    const numberOrderTd = document.createElement("td")
    const thingTd = document.createElement("td")
    const numberOfItemTd = document.createElement("td")

    numberOrderTd.innerHTML = document.querySelector("#orderId").value;
    thingTd.innerHTML = document.querySelector("#item").value;
    numberOfItemTd.innerHTML = document.querySelector("#quantity").value;

    tr.appendChild(numberOrderTd)
    tr.appendChild(thingTd)
    tr.appendChild(numberOfItemTd)

    document.querySelector("#orders tbody").appendChild(tr)

})
