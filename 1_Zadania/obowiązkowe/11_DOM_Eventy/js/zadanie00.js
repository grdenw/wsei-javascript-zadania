// zadanie 0a

document.querySelectorAll(".parent").forEach( item => {
    item.addEventListener("mouseover", function () {
        this.querySelector(".children").style.display = "block"
    })
    item.addEventListener("mouseout", function () {
        this.querySelector(".children").style.display = "none"

    })
})

// zadanie 0b

document.querySelectorAll(".parent").forEach( item => {
    item.addEventListener("mouseover", function () {
        this.querySelector(".children").style.display = "block"
    })
    item.addEventListener("mouseout", function () {
        function hideChildrenElement(parent){
            parent.firstElementChild.style.display = "none"
        }
        hideChildrenElement(this)
    })
})