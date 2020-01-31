// Zadanie3

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach( item => {
        item.addEventListener("click", function () {
            let counter = this.nextElementSibling.firstElementChild.innerHTML;
            counter++
            this.nextElementSibling.firstElementChild.innerHTML = counter
        })
    })
})