// Zadanie 3

const listItems = document.querySelectorAll(".listContainer .list");

listItems.forEach( item => {
    item.addEventListener("click", function () {
        [...this.children].forEach( item => item.style.backgroundColor = "green")
        this.firstElementChild.style.backgroundColor = "red";
        this.lastElementChild.style.backgroundColor = "blue"
    })
})