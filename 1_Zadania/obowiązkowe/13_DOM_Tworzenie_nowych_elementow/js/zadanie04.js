// zadanie 4
//
document.querySelector("#remove").addEventListener("click", function () {
    [...this.previousElementSibling.children].forEach( item => item.remove())
})
