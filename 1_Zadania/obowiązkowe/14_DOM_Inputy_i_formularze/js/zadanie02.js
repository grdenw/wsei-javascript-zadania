// zadanie 2

const selectForm = document.querySelector("select.form-control");
document.querySelectorAll(".page-header img").forEach( item => {
    item.style.display = "none"
    item.getAttribute("alt") == selectForm.value ? item.style.display = "block" : ""
})



document.querySelector("button.btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".page-header img").forEach( item => {
        item.style.display = "none"
        item.getAttribute("alt") == selectForm.value ? item.style.display = "block" : ""
    })
})
