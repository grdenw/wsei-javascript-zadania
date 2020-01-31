// Zadanie 4

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach( item => {
        item.addEventListener("click", function () {
            let counter = document.querySelector(".counter").innerHTML;
            counter++
            document.querySelector(".counter").innerHTML = counter
        })
    })
})