// zadanie 1

document.querySelector("#invoiceData").style.display = "none";

document.querySelector("#invoice").addEventListener("click", function () {
    this.checked ? document.querySelector("#invoiceData").style.display = "block"
        : document.querySelector("#invoiceData").style.display = "none";
})
