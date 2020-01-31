// Zadanie 1

const btnLinks = document.querySelectorAll(".button");

btnLinks.forEach( item => {
    item.addEventListener("click", function () {
        if(this.nextElementSibling !== null) {
            getComputedStyle(this.nextElementSibling).display == "none" ? this.nextElementSibling.style.display = "block" : this.nextElementSibling.style.display = "none"
        }
    })
})