document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // zadanie 0

    const ex5 = document.querySelector(".ex5");

    ex5.querySelectorAll("li:nth-child(2n)").forEach( item => {
        item.style.backgroundColor = "green"
    })
    ex5.querySelectorAll("li:nth-child(2n)").forEach( item => {
        item.style.backgroundColor = "green"
    })
    ex5.querySelector("li:nth-child(5)").setAttribute("class", "big")
    ex5.querySelectorAll("li:nth-child(3n)").forEach( item => {
        item.style.borderBottom = "5px solid red"
    })

    // zadanie 2

    const spanName = document.querySelector(".ex2 span#name");
    const spanMeal = document.querySelector(".ex2 span#fav_meal");
    const spanColor= document.querySelector(".ex2 span#fav_color");

    spanName.innerHTML = "Wojciech Grdeń"
    spanMeal.innerHTML = "Kiełbasa"
    spanColor.innerHTML = "Różowy"

    // zadanie 3

    document.querySelector(".ex3 ul").setAttribute("class", "menu");
    document.querySelectorAll(".ex3 ul li").forEach(item => {
        item.classList.add("menuElement")
        item.classList.contains("error") ? item.classList.remove("error") : ""
    })

    // zadanie 4
    document.querySelectorAll(".ex4 ul li").forEach( (item, index) => {
        item.setAttribute("data-id", `${index + 1}`)
    })
});
