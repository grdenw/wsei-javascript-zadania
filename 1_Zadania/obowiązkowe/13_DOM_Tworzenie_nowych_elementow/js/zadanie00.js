// Zadanie 0

document.querySelectorAll(".deleteBtn").forEach(
    item => item.addEventListener("click", function () {
        this.parentElement.parentElement.remove();
    })
)