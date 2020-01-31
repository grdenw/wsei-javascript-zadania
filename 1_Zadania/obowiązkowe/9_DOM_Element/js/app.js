document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // zadanie 0
    function getDatasInfo(elements) {
        const liData = []
        elements.forEach(item => liData.push(item.getAttribute("data-color")))
        return liData;
    }

    console.log(getDatasInfo([...links]));

    // zadanie 1

    console.log(homeElement)
    console.log(childElements)
    console.log(banner)
    console.log(blocks)
    blocks.forEach(item => console.log(item))

    // zadanie 2

    blocks.forEach(item => {
            console.log(item.innerHTML)
            console.log(item.outerHTML)
        item.innerHTML = "Nowa wartość diva o klasie blocks"
        }
    )

    // inner HTML zwraca tylko dzieci elementu a outer html zwraca sam element wraz z dziecmi

    // zadanie 3
    const mainFooter = document.getElementById("mainFooter");
    function getId(element) {
        return element.getAttribute("id")
    }
    console.log(getId(mainFooter))

    // zadanie 4
    function getClassInfo(element) {
        const arr = []
        arr.push(element.getAttribute("class"))
        return arr
    }

    console.log(getClassInfo(banner))

    // zadanie 5
    const liInNav = document.querySelectorAll("nav li")

    function setDataDirection(elements) {
        elements.forEach(item => item.setAttribute("data-direction", "top"))
    }

    setDataDirection(liInNav);
});

