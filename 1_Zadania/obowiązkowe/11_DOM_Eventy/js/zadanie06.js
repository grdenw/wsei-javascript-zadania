// Zadanie 6

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#box").addEventListener("mousemove", function (e) {
        document.getElementById("globalX").innerText = e.clientX
        document.getElementById("globalY").innerText = e.clientY
        document.getElementById("localX").innerText = e.clientX - this.offsetLeft;
        document.getElementById("localY").innerText = e.clientY - this.offsetTop;
    })
})