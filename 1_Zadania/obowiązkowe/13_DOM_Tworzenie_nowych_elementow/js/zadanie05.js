// zadanie 5

document.querySelectorAll(".moveBtn").forEach( item => {
    item.addEventListener("click", function () {
        const liItem = this.parentElement;
        const liItemClone = liItem;

        if(liItem.parentElement.parentElement.nextElementSibling.getAttribute("class")) {
            liItem.parentElement.parentElement.nextElementSibling.appendChild(liItemClone)
        } else {
            liItem.parentElement.parentElement.previousElementSibling.appendChild(liItemClone)
        }


        liItem.remove();

    })
})