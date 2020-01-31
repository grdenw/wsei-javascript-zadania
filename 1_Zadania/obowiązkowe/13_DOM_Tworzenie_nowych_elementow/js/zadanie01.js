// zadanie 1
let counter = 0;
document.querySelector(".button").addEventListener("click", function () {
    counter++;
    const listItem = document.createElement("li")
    listItem.innerHTML = `<li>Element ${counter} - w chiwili dodania było ${counter - 1} elementów</li>`
    this.previousElementSibling.appendChild(listItem)
})