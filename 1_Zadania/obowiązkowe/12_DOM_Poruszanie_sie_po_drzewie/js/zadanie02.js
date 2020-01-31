// Zadanie 2

const btnLinks = document.querySelectorAll(".button");

btnLinks.forEach( item => {
    item.addEventListener("click", function () {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
        this.parentElement.style.backgroundColor = randomColor
    })
})